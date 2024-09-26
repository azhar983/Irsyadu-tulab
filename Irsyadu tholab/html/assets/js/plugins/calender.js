"use strict"

if (document.querySelectorAll('#calendar1').length) {
  document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar1');
    let calendar1 = new FullCalendar.Calendar(calendarEl, {
      selectable: true,
      plugins: ["timeGrid", "dayGrid", "list", "interaction"],
      timeZone: "UTC",
      defaultView: "dayGridMonth",
      contentHeight: "auto",
      eventLimit: true,
      dayMaxEvents: 4,
      header: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      dateClick: function (info) {
          $('#schedule-start-date').val(info.dateStr);
          $('#schedule-end-date').val(info.dateStr);
          $('#date-event').modal('show');
      },
      events: generateIslamicEvents(2024, 2030) // Menghasilkan event dari 2024 hingga 2030
    });
    calendar1.render();
  });
}

// Fungsi untuk menghasilkan event spesial Islam
function generateIslamicEvents(startYear, endYear) {
  const events = [];
  
  // Loop untuk setiap tahun
  for (let year = startYear; year <= endYear; year++) {
    // Menambahkan event spesial Islam
    events.push({
      title: 'Tahun Baru Islam',
      start: `${year}-07-07`,
      backgroundColor: 'rgba(58,87,232,0.2)',
      textColor: 'rgba(58,87,232,1)',
      borderColor: 'rgba(58,87,232,1)'
    });

    events.push({
      title: 'Isra Mi\'raj',
      start: `${year}-02-08`,
      backgroundColor: 'rgba(108,117,125,0.2)',
      textColor: 'rgba(108,117,125,1)',
      borderColor: 'rgba(108,117,125,1)'
    });

    events.push({
      title: 'Maulid Nabi',
      start: `${year}-09-16`,
      backgroundColor: 'rgba(8,130,12,0.2)',
      textColor: 'rgba(8,130,12,1)',
      borderColor: 'rgba(8,130,12,1)'
    });

      events.push({
        title: 'Hari Kemerdekaan Indonesia',
        start: `${year}-08-17`,
        backgroundColor: 'rgba(218,41,28,0.2)',
        textColor: 'rgba(218,41,28,1)',
        borderColor: 'rgba(218,41,28,1)'
      });
      events.push({
        title: 'Isra dan Mikraj Nabi Muhammad SAW',
        start: `${year}-02-08`,
        backgroundColor: 'rgba(58,87,232,0.2)',
        textColor: 'rgba(58,87,232,1)',
        borderColor: 'rgba(58,87,232,1)'
    });
    events.push({
        title: 'Hari Raya Idul Fitri',
        start: `${year}-04-10`, // Contoh untuk 1 Syawal
        backgroundColor: 'rgba(8,130,12,0.2)',
        textColor: 'rgba(8,130,12,1)',
        borderColor: 'rgba(8,130,12,1)'
    });
    events.push({
        title: 'Hari Raya Idul Adha',
        start: `${year}-06-17`, // Contoh untuk 10 Zulhijah
        backgroundColor: 'rgba(235,153,27,0.2)',
        textColor: 'rgba(235,153,27,1)',
        borderColor: 'rgba(235,153,27,1)'
    });
    events.push({
        title: 'Tahun Baru Hijriyah',
        start: `${year}-07-08`, // Contoh untuk 1 Muharam
        backgroundColor: 'rgba(206,32,20,0.2)',
        textColor: 'rgba(206,32,20,1)',
        borderColor: 'rgba(206,32,20,1)'
    });
    events.push({
        title: 'Tahun Baru Masehi',
        start: `${year}-01-01`,
        backgroundColor: 'rgba(108,117,125,0.2)',
        textColor: 'rgba(108,117,125,1)',
        borderColor: 'rgba(108,117,125,1)'
    });
    events.push({
        title: 'Tahun Baru Imlek',
        start: `${year}-02-10`,
        backgroundColor: 'rgba(58,87,232,0.2)',
        textColor: 'rgba(58,87,232,1)',
        borderColor: 'rgba(58,87,232,1)'
    });
    events.push({
        title: 'Hari Suci Nyepi/Tahun Baru Saka',
        start: `${year}-03-11`,
        backgroundColor: 'rgba(108,117,125,0.2)',
        textColor: 'rgba(108,117,125,1)',
        borderColor: 'rgba(108,117,125,1)'
    });
    events.push({
        title: 'Wafat Yesus Kristus',
        start: `${year}-03-29`,
        backgroundColor: 'rgba(8,130,12,0.2)',
        textColor: 'rgba(8,130,12,1)',
        borderColor: 'rgba(8,130,12,1)'
    });
    events.push({
        title: 'Hari Buruh Internasional',
        start: `${year}-05-01`,
        backgroundColor: 'rgba(235,153,27,0.2)',
        textColor: 'rgba(235,153,27,1)',
        borderColor: 'rgba(235,153,27,1)'
    });
    events.push({
        title: 'Hari Trisuci Waisak',
        start: `${year}-05-23`,
        backgroundColor: 'rgba(206,32,20,0.2)',
        textColor: 'rgba(206,32,20,1)',
        borderColor: 'rgba(206,32,20,1)'
    });
    events.push({
        title: 'Kenaikan Yesus Kristus',
        start: `${year}-06-06`,
        backgroundColor: 'rgba(58,87,232,0.2)',
        textColor: 'rgba(58,87,232,1)',
        borderColor: 'rgba(58,87,232,1)'
    });
    events.push({
        title: 'Hari Lahir Pancasila',
        start: `${year}-06-01`,
        backgroundColor: 'rgba(108,117,125,0.2)',
        textColor: 'rgba(108,117,125,1)',
        borderColor: 'rgba(108,117,125,1)'
    });
    events.push({
        title: 'Hari Kemerdekaan RI',
        start: `${year}-08-17`,
        backgroundColor: 'rgba(235,153,27,0.2)',
        textColor: 'rgba(235,153,27,1)',
        borderColor: 'rgba(235,153,27,1)'
    });
    events.push({
        title: 'Hari Raya Natal',
        start: `${year}-12-25`,
        backgroundColor: 'rgba(8,130,12,0.2)',
        textColor: 'rgba(8,130,12,1)',
        borderColor: 'rgba(8,130,12,1)'
    });
    events.push({
      title: 'Hari Batik Nasional',
      start: `${year}-10-02`,
      backgroundColor: 'rgba(58,87,232,0.2)',
      textColor: 'rgba(58,87,232,1)',
      borderColor: 'rgba(58,87,232,1)'
    });

  }

  return events;
}