(() => {
  const F = window.FESTA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ── Formatting ───────────────────────────────────────── */
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const parseDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
  const start = parseDate(F.festival.start);
  const end = parseDate(F.festival.end);

  function fmtTime(hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    if (h === 12 && m === 0) return 'Noon';
    const suffix = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 || 12;
    return m ? `${h12}:${String(m).padStart(2, '0')}${suffix}` : `${h12}${suffix}`;
  }
  const fmtRange = (a, b) => `${fmtTime(a)}–${fmtTime(b)}`;
  const dateRange = (short) => {
    const mo = short ? MONTHS[start.getMonth()].slice(0, 3) : MONTHS[start.getMonth()];
    return start.getMonth() === end.getMonth()
      ? `${mo} ${start.getDate()}–${end.getDate()}`
      : `${mo} ${start.getDate()} – ${MONTHS[end.getMonth()].slice(0, short ? 3 : 99)} ${end.getDate()}`;
  };

  /* ── Global bindings ──────────────────────────────────── */
  $('#previewBanner').hidden = !F.preview;
  $$('[data-festival-dates]').forEach((el) => (el.textContent = `${dateRange(false)}, ${F.festival.year}`));
  $$('[data-festival-dates-short]').forEach((el) => (el.textContent = `${dateRange(true)} · ${F.festival.year}`));
  $$('[data-festival-year]').forEach((el) => (el.textContent = F.festival.year));
  $$('[data-tentative]').forEach((el) => (el.hidden = F.festival.datesConfirmed));
  $$('[data-this-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
  $$('[data-sponsors-year]').forEach((el) => (el.textContent = F.sponsorsYear));
  $$('[data-vendor-count]').forEach((el) => (el.textContent = F.vendors.length));
  $$('[data-ticket-from]').forEach((el) => (el.textContent = `from $${Math.min(...F.tickets.options.map((o) => o.price))}`));
  $$('[data-tickets]').forEach((el) => { el.href = F.tickets.url; el.target = '_blank'; el.rel = 'noopener'; });
  $$('[data-maps]').forEach((el) => (el.href = F.festival.mapsUrl));
  $$('[data-link]').forEach((el) => { const url = F.links[el.dataset.link]; if (url) el.href = url; });
  const pres = $('#presenting');
  pres.href = F.presentingSponsor.url;

  /* ── Hours + prices ───────────────────────────────────── */
  $('#hoursList').innerHTML = F.days.map((d) => `
    <li class="${d.note ? 'has-note' : ''}">
      <span class="d">${esc(d.en)}<small lang="it">${esc(d.it)}</small></span>
      <span class="t">${fmtRange(d.open, d.close)}</span>
      ${d.note ? `<span class="n">${esc(d.note)}</span>` : ''}
    </li>`).join('');

  const priceHTML = F.tickets.options.map((o) => `
    <li><span class="l">${esc(o.label)}<small>${esc(o.note)}</small></span><span class="p">$${o.price}</span></li>`).join('');
  $('#priceList').innerHTML = priceHTML;
  $('#priceListLg').innerHTML = priceHTML;

  /* ── Countdown ────────────────────────────────────────── */
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const DAY = 864e5;
  const festDayIndex = Math.round((today - start) / DAY); // 0 = Friday
  const num = $('#countNum'), label = $('#countLabel');
  if (today < start) {
    const n = Math.round((start - today) / DAY);
    num.textContent = n;
    label.textContent = n === 1 ? 'day until Festa' : 'days until Festa';
  } else if (today <= end) {
    const d = F.days[festDayIndex];
    num.textContent = 'Oggi!';
    label.textContent = d ? `Open until ${fmtTime(d.close)}` : 'Festa is on!';
  } else {
    num.textContent = 'Grazie';
    label.textContent = 'See you next year';
  }

  /* ── Lineup ───────────────────────────────────────────── */
  const state = {
    day: festDayIndex >= 0 && festDayIndex < F.days.length ? F.days[festDayIndex].key : F.days[0].key,
    stage: 'all',
  };

  if (F.lineupYear !== F.festival.year) {
    const note = $('#lineupNote');
    note.hidden = false;
    note.textContent = `Showing the ${F.lineupYear} lineup. The ${F.festival.year} lineup is coming soon.`;
  }

  // Day tabs
  const tabs = $('#dayTabs');
  tabs.innerHTML = F.days.map((d) => `
    <button class="day-tab" role="tab" id="tab-${d.key}" data-day="${d.key}" aria-controls="lineupPanel">
      <span class="it">${esc(d.en)}</span>
      <span class="meta"><span class="it-name" lang="it">${esc(d.it)} · </span>${fmtRange(d.open, d.close)}</span>
    </button>`).join('');
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-day]');
    if (!b) return;
    state.day = b.dataset.day; renderLineup();
  });
  tabs.addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    const keys = F.days.map((d) => d.key);
    let i = keys.indexOf(state.day);
    i = e.key === 'Home' ? 0 : e.key === 'End' ? keys.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + keys.length) % keys.length;
    state.day = keys[i]; renderLineup();
    $(`#tab-${keys[i]}`).focus();
    e.preventDefault();
  });

  // Stage chips — only stages that actually appear in the lineup
  const usedStages = [...new Set(F.lineup.map((a) => a.stage))];
  const chipBox = $('#stageChips');
  chipBox.innerHTML = [`<button class="chip" data-stage="all">All stages</button>`]
    .concat(usedStages.map((k) => {
      const s = F.stages[k];
      return `<button class="chip" data-stage="${k}" data-c="${s.color}"><span class="dot"></span>${esc(s.short)}</button>`;
    })).join('');
  chipBox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-stage]');
    if (!b) return;
    state.stage = b.dataset.stage; renderLineup();
  });

  function actHTML(a) {
    const s = F.stages[a.stage];
    return `
      <li class="act">
        <p class="act-time">${fmtTime(a.start)}${a.end ? `<small>to ${fmtTime(a.end)}</small>` : ''}</p>
        <div class="act-main">
          <h3 class="act-name">${esc(a.name)}<span class="sr-only">, </span><span class="act-tag">${esc(a.tag)}</span></h3>
          <p class="act-blurb">${esc(a.blurb)}</p>
        </div>
        <p class="act-stage" data-c="${s.color}"><span class="dot"></span>${esc(s.name)}</p>
      </li>`;
  }

  function renderLineup() {
    $$('.day-tab', tabs).forEach((t) => {
      const sel = t.dataset.day === state.day;
      t.setAttribute('aria-selected', sel);
      t.tabIndex = sel ? 0 : -1;
    });
    $('#lineupPanel').setAttribute('aria-labelledby', `tab-${state.day}`);
    $$('.chip', chipBox).forEach((c) => c.setAttribute('aria-pressed', c.dataset.stage === state.stage));

    const acts = F.lineup
      .filter((a) => a.day === state.day)
      .filter((a) => state.stage === 'all' || a.stage === state.stage)
      .sort((a, b) => a.start.localeCompare(b.start));

    $('#schedule').innerHTML = acts.map(actHTML).join('');
    $('#scheduleEmpty').hidden = acts.length > 0;
  }
  renderLineup();

  $('#allWeekend').innerHTML = F.allWeekend.map((a) => `
    <article class="weekend-card">
      <p class="from">${esc(a.from)}</p>
      <h4>${esc(a.name)}</h4>
      <p>${esc(a.blurb)}</p>
    </article>`).join('');

  /* ── Food ─────────────────────────────────────────────── */
  const foodChips = $('#foodChips');
  let foodCat = 'all';
  foodChips.innerHTML = [`<button class="chip" data-cat="all">Everything</button>`]
    .concat(F.foodCategories.map((c) => `<button class="chip" data-cat="${c.key}">${esc(c.label)}</button>`)).join('');
  foodChips.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    foodCat = b.dataset.cat; renderFood();
  });
  const catLabel = Object.fromEntries(F.foodCategories.map((c) => [c.key, c.label]));
  function renderFood() {
    $$('.chip', foodChips).forEach((c) => c.setAttribute('aria-pressed', c.dataset.cat === foodCat));
    $('#vendorGrid').innerHTML = F.vendors
      .filter((v) => foodCat === 'all' || v.cat === foodCat)
      .map((v) => `
        <li class="vendor" data-cat="${v.cat}">
          <p class="cat">${esc(catLabel[v.cat])}</p>
          <h3>${esc(v.name)}</h3>
          <p>${esc(v.note)}</p>
        </li>`).join('');
  }
  renderFood();

  /* ── Sponsors ─────────────────────────────────────────── */
  $('#sponsorGrid').innerHTML = F.sponsors.map(([name, file, url]) => {
    const img = `<img src="assets/img/sponsors/${encodeURI(file)}" alt="${esc(name)}" loading="lazy" width="400" height="300">`;
    return `<li>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(name)} (opens in new tab)">${img}</a>` : img}</li>`;
  }).join('');

  /* ── Header: mobile menu, scroll state, scrollspy ─────── */
  const header = $('.site-header');
  const nav = $('#siteNav');
  const toggle = $('#menuToggle');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const navLinks = $$('.nav a[href^="#"]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => { const sec = $(a.getAttribute('href')); if (sec) spy.observe(sec); });

  /* ── Activity detail cards ────────────────────────────── */
  const dlg = $('#activityDialog');
  const dlgBody = $('#activityBody');
  const ICON = { mail: '#i-mail', phone: '#i-phone', external: '#i-external', doc: '#i-doc', pin: '#i-pin', ticket: '#i-ticket', arrow: '#i-arrow' };

  // "Details →" affordance on every tile that opens a card
  $$('.bento [data-activity]').forEach((t) => {
    (t.querySelector('.tile-copy') || t).insertAdjacentHTML('beforeend', '<span class="tile-more">Details <svg class="ico"><use href="#i-arrow"/></svg></span>');
  });

  const ctaHTML = (c) => {
    const ext = /^https?:/.test(c.href);
    return `<a class="btn ${c.kind === 'secondary' ? 'btn-outline' : 'btn-rosso'}" href="${esc(c.href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>
      <svg class="ico"><use href="${ICON[c.icon] || ICON.arrow}"/></svg>${esc(c.label)}</a>`;
  };
  const contactHTML = (c) => {
    const bits = [];
    if (c.email) bits.push(`<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`);
    if (c.phone) bits.push(`<a href="tel:+1${c.phone.replace(/\D/g, '').slice(0, 10)}">${esc(c.phone)}</a>`);
    return `<p class="act-contact"><strong>${esc(c.name)}</strong>${c.role ? `, ${esc(c.role)}` : ''}${bits.length ? ' · ' + bits.join(' · ') : ''}</p>`;
  };

  function openActivity(key) {
    const a = F.activities[key];
    if (!a) return;
    dlgBody.innerHTML = `
      ${a.photo ? `<img class="act-dlg-photo${a.photoFit === 'contain' ? ' act-dlg-photo-contain' : ''}" src="assets/img/photos/${a.photo}.webp" alt="" style="${a.photoPos ? `object-position:${esc(a.photoPos)};` : ''}${a.photoBg ? `background:${esc(a.photoBg)};` : ''}">` : ''}
      <div class="act-dlg-copy">
        <p class="eyebrow eyebrow-rosso">${esc(a.when)}${a.where ? ` · ${esc(a.where)}` : ''}</p>
        <h2 class="h2 act-dlg-title" id="activityTitle">${esc(a.title)}</h2>
        ${a.tagline ? `<p class="lede">${esc(a.tagline)}</p>` : ''}
        ${(a.body || []).map((p) => `<p>${esc(p)}</p>`).join('')}
        ${a.facts?.length ? `<dl class="act-facts">${a.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : ''}
        ${a.ctas?.length ? `<div class="act-ctas">${a.ctas.map(ctaHTML).join('')}</div>` : ''}
        ${a.contact ? contactHTML(a.contact) : ''}
        ${a.related?.length ? `<p class="act-related">See also: ${a.related.map((k) => `<a href="#festa-${k}" data-activity="${k}">${esc(F.activities[k].title)}</a>`).join(' · ')}</p>` : ''}
        ${a.note ? `<p class="fine act-note">${esc(a.note)}</p>` : ''}
        ${a.tbd ? `<p class="fine act-note">Details for ${F.festival.year} are still being confirmed.</p>` : ''}
        ${a.dated && !a.note ? `<p class="fine act-note">Details shown are from Festa ${F.activitiesYear}. ${F.festival.year} dates and deadlines will be updated once confirmed.</p>` : ''}
      </div>`;
    if (!dlg.open) dlg.showModal();
    $('.act-dlg-card', dlg).scrollTop = 0;
    document.body.classList.add('is-locked');
    if (location.hash !== `#festa-${key}`) history.replaceState(null, '', `#festa-${key}`);
  }
  dlg.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    if (location.hash.startsWith('#festa-')) history.replaceState(null, '', location.pathname + location.search);
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); }); // backdrop
  $('#activityClose').addEventListener('click', () => dlg.close());
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-activity]');
    if (!t) return;
    e.preventDefault();
    openActivity(t.dataset.activity);
  });
  dlgBody.addEventListener('click', (e) => { if (e.target.closest('a[href="#lineup"]')) dlg.close(); });
  const openFromHash = () => { const m = location.hash.match(/^#festa-([a-z-]+)$/); if (m && F.activities[m[1]]) openActivity(m[1]); };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);

  /* ── Newsletter (demo: wire to Mailchimp / Constant Contact before launch) ── */
  $('#newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#nlEmail');
    const msg = $('#nlMsg');
    if (!input.checkValidity() || !input.value) {
      msg.textContent = 'Please enter a valid email address.';
      input.focus();
      return;
    }
    msg.textContent = 'Grazie! You’re on the list.';
    input.value = '';
  });
})();
