// Dummy data for demo mode. No real people, addresses, or phone numbers.
// All names, addresses, and contact info are fictional.

function fmtDate(d) {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

const OPPDRAG = [
  {
    oppdragsnr: '2026-042',
    datoMottatt: fmtDate(daysAgo(1)),
    adresse: 'Solbakken 12, 6010 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Kari Nordmann (DNB Eiendom)',
    selger: 'Ola Eksempel',
    selgerTlf: '900 00 001',
    status: 'Mottatt',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-041',
    datoMottatt: fmtDate(daysAgo(1)),
    adresse: 'Fjordgata 5B, 6020 Ålesund',
    oppdragstype: 'Verdivurdering',
    megler: 'Per Hansen (EiendomsMegler 1)',
    selger: 'Marit Prøve',
    selgerTlf: '900 00 002',
    status: 'Befaring booket',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-040',
    datoMottatt: fmtDate(daysAgo(2)),
    adresse: 'Storhaugveien 44, 6015 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Lise Berg (Krogsveen)',
    selger: 'Arne Demonstrasjon',
    selgerTlf: '900 00 003',
    status: 'Befart',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-039',
    datoMottatt: fmtDate(daysAgo(3)),
    adresse: 'Birkeveien 9, 6008 Ålesund',
    oppdragstype: 'Boligsalgsrapport',
    megler: 'Tom Olsen (PrivatMegleren)',
    selger: 'Ingrid Fiktiv',
    selgerTlf: '900 00 004',
    status: 'Under arbeid',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-038',
    datoMottatt: fmtDate(daysAgo(4)),
    adresse: 'Havnegata 22, 6002 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Anne Lund (DNB Eiendom)',
    selger: 'Bjørn Testdata',
    selgerTlf: '900 00 005',
    status: 'Kan faktureres',
    prisInkl: 18500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-037',
    datoMottatt: fmtDate(daysAgo(5)),
    adresse: 'Åsveien 7, 6030 Langevåg',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Morten Sæther (EiendomsMegler 1)',
    selger: 'Silje Eksempelsen',
    selgerTlf: '900 00 006',
    status: 'Kan faktureres',
    prisInkl: 22000,
    reiseInkl: 600,
  },
  {
    oppdragsnr: '2026-036',
    datoMottatt: fmtDate(daysAgo(6)),
    adresse: 'Rønningveien 3, 6018 Ålesund',
    oppdragstype: 'Verdivurdering',
    megler: 'Kari Nordmann (DNB Eiendom)',
    selger: 'Henrik Prøvesen',
    selgerTlf: '900 00 007',
    status: 'Fakturert',
    prisInkl: 9500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-035',
    datoMottatt: fmtDate(daysAgo(7)),
    adresse: 'Skogveien 18, 6010 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Per Hansen (EiendomsMegler 1)',
    selger: 'Lars Demo',
    selgerTlf: '900 00 008',
    status: 'Fakturert',
    prisInkl: 19800,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-034',
    datoMottatt: fmtDate(daysAgo(9)),
    adresse: 'Myrveien 2A, 6022 Ålesund',
    oppdragstype: 'Boligsalgsrapport',
    megler: 'Lise Berg (Krogsveen)',
    selger: 'Kari Testesen',
    selgerTlf: '900 00 009',
    status: 'Fakturert',
    prisInkl: 25500,
    reiseInkl: 800,
  },
  {
    oppdragsnr: '2026-033',
    datoMottatt: fmtDate(daysAgo(10)),
    adresse: 'Bjerkebakken 14, 6008 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Tom Olsen (PrivatMegleren)',
    selger: 'Eivind Eksempel',
    selgerTlf: '900 00 010',
    status: 'Fakturert',
    prisInkl: 21000,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-032',
    datoMottatt: fmtDate(daysAgo(12)),
    adresse: 'Lerkeveien 6, 6015 Ålesund',
    oppdragstype: 'Verdivurdering',
    megler: 'Anne Lund (DNB Eiendom)',
    selger: 'Maja Demonstrant',
    selgerTlf: '900 00 011',
    status: 'Oppdrag fullført',
    prisInkl: 8500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-031',
    datoMottatt: fmtDate(daysAgo(14)),
    adresse: 'Dalsveien 11, 6030 Langevåg',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Morten Sæther (EiendomsMegler 1)',
    selger: 'Tor Fiktivsen',
    selgerTlf: '900 00 012',
    status: 'Under arbeid',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-030',
    datoMottatt: fmtDate(daysAgo(15)),
    adresse: 'Vestre Strandvei 40, 6002 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Kari Nordmann (DNB Eiendom)',
    selger: 'Nina Prøve',
    selgerTlf: '900 00 013',
    status: 'Befart',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-029',
    datoMottatt: fmtDate(daysAgo(16)),
    adresse: 'Kirkegata 3, 6004 Ålesund',
    oppdragstype: 'Boligsalgsrapport',
    megler: 'Per Hansen (EiendomsMegler 1)',
    selger: 'Sondre Testkarl',
    selgerTlf: '900 00 014',
    status: 'Befaring booket',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-028',
    datoMottatt: fmtDate(daysAgo(18)),
    adresse: 'Fjellveien 21, 6011 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Lise Berg (Krogsveen)',
    selger: 'Camilla Eksempelsen',
    selgerTlf: '900 00 015',
    status: 'Oppdrag kansellert',
    prisInkl: 0,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-027',
    datoMottatt: fmtDate(daysAgo(20)),
    adresse: 'Parkveien 8, 6008 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Tom Olsen (PrivatMegleren)',
    selger: 'Joakim Demo',
    selgerTlf: '900 00 016',
    status: 'Fakturert',
    prisInkl: 20500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-026',
    datoMottatt: fmtDate(daysAgo(22)),
    adresse: 'Langnesveien 55, 6022 Ålesund',
    oppdragstype: 'Verdivurdering',
    megler: 'Anne Lund (DNB Eiendom)',
    selger: 'Else Dummysen',
    selgerTlf: '900 00 017',
    status: 'Fakturert',
    prisInkl: 9500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-025',
    datoMottatt: fmtDate(daysAgo(24)),
    adresse: 'Bergshaugveien 4, 6015 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Morten Sæther (EiendomsMegler 1)',
    selger: 'Rune Fiktiv',
    selgerTlf: '900 00 018',
    status: 'Fakturert',
    prisInkl: 19500,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-024',
    datoMottatt: fmtDate(daysAgo(28)),
    adresse: 'Sjøgata 17, 6002 Ålesund',
    oppdragstype: 'Tilstandsrapport',
    megler: 'Kari Nordmann (DNB Eiendom)',
    selger: 'Ida Prøvebruker',
    selgerTlf: '900 00 019',
    status: 'Fakturert',
    prisInkl: 23000,
    reiseInkl: 0,
  },
  {
    oppdragsnr: '2026-023',
    datoMottatt: fmtDate(daysAgo(32)),
    adresse: 'Øvre Berg 9, 6011 Ålesund',
    oppdragstype: 'Boligsalgsrapport',
    megler: 'Per Hansen (EiendomsMegler 1)',
    selger: 'Thomas Testmann',
    selgerTlf: '900 00 020',
    status: 'Oppdrag fullført',
    prisInkl: 24500,
    reiseInkl: 0,
  },
];

function getDemoDashboardData() {
  const now = new Date();
  const curMonth = now.getMonth();
  const curYear = now.getFullYear();

  const statusCounts = {};
  let utestaendeInkl = 0;
  let omsMaaned = 0;
  let omsAar = 0;
  let sumPris = 0;
  let countPris = 0;

  for (const o of OPPDRAG) {
    statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;

    if (o.status === 'Kan faktureres') {
      utestaendeInkl += (o.prisInkl || 0) + (o.reiseInkl || 0);
    }
    if (o.status === 'Fakturert' || o.status === 'Kan faktureres') {
      omsAar += o.prisInkl || 0;
      // Parse dd.mm.yyyy
      const [dd, mm, yyyy] = o.datoMottatt.split('.').map(Number);
      if (mm - 1 === curMonth && yyyy === curYear) {
        omsMaaned += o.prisInkl || 0;
      }
      if (o.prisInkl > 0) {
        sumPris += o.prisInkl;
        countPris++;
      }
    }
  }

  const total = OPPDRAG.length;
  const doneCount =
    (statusCounts['Fakturert'] || 0) +
    (statusCounts['Oppdrag kansellert'] || 0) +
    (statusCounts['Oppdrag fullført'] || 0);
  const active = total - doneCount;

  return {
    success: true,
    demoMode: true,
    testMode: false,
    total,
    active,
    utestaendeInkl,
    omsMaaned,
    omsAar,
    snittPrisInkl: countPris ? Math.round(sumPris / countPris) : 0,
    oppdrag: OPPDRAG.map((o) => ({
      ...o,
      prisInkl: o.prisInkl || null,
      reiseInkl: o.reiseInkl || null,
    })),
    statusCounts,
  };
}

module.exports = { getDemoDashboardData, OPPDRAG };
