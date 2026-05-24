function TableCompilazioni(language,name){
	$(name).dataTable( {
		"scrollX": true,
		"sScrollX": "100%",
		"order": [[1,"asc"]],
		"columns": [
			{ "orderable": true }, 	// AA
			{ "orderable": true },	// Insegnamento
			{ "orderable": true },	// Modulo
			{ "orderable": true },	// Docente
			{ "orderable": false }	// Link
		],
		"sDom": "T<'box-content'<'col-sm-6'f><'col-sm-6 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}


function TableCalendario(language,name){
	$(name).dataTable( {
		"scrollX": true,
		"sScrollX": "100%",
		"order": [[2,"asc"]],
		"columns": [
			{ "orderable": true }, 	// AA
			{ "orderable": true },	// CdS
			{ "orderable": true },	// Insegnamento - codice
			{ "orderable": true },	// Docente
			{ "orderable": true, "iDataSort": 10 },	// Data e ora in formato italiano
			{ "orderable": false },	// Tipo
			{ "orderable": false },	// Sede
			{ "orderable": false },	// Inizio iscrizioni
			{ "orderable": false },	// Fine iscrizioni
			{ "orderable": false },	// Note
			{ "visible": false }	// data e ora in formato YYYY-MM-GG
		],
		"sDom": "T<'box-content'<'col-sm-6'f><'col-sm-6 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}


function TableProgrammi(language,name){
	$(name).dataTable( {
		"scrollX": false,
		//"sScrollX": "100%",
		"order": [[1,"asc"]],
		"columns": [
		//	{ "orderable": false }, 	// AA
		//	{ "orderable": false },	// CdS
			{ "orderable": true },	// Codice
			{ "orderable": true },	// Insegnamento
			{ "orderable": false },	// Docente/i
			{ "orderable": false },	// CFU
			{ "orderable": true },	// Periodo
			{ "orderable": false }	// Mutuazioni
		//	{ "orderable": false }	// colonna libera

		],
		"sDom": "T<'box-content'<'col-sm-6'f><'col-sm-6 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}


function TableCorsi(language,name){
	$(name).dataTable( {
		"scrollX": true,
		"sScrollX": "100%",
		"order": [[1,"desc"]],
		"columns": [
			{ "visible": false, "orderable": false },
			{ "orderable": false },
			{ "orderable": true },
			{ "orderable": true },
			{ "orderable": false },
			{ "orderable": false },
			{ "orderable": true },
			{ "orderable": false }/*,
			{ "visible": false }*/
		],
		"sDom": "T<'box-content'<'col-sm-6'f><'col-sm-6 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}

function TableCorsiRicProgrammi(language,name){
	$(name).dataTable( {
		"scrollX": true,
		"sScrollX": "100%",
		"order": [[1,"desc"]],
		"columns": [
			{ "visible": false, "orderable": false },
//			{ "orderable": false },
			{ "orderable": true }, 	// cds
			{ "orderable": true },	// insegnamento
			{ "orderable": false },	// codice
			{ "orderable": false },	// cfu
			{ "orderable": true },	// semestre
			{ "orderable": true },	// docente
			{ "orderable": false }  // moduli 
		],
		"sDom": "T<'box-content'<'col-sm-6'f><'col-sm-6 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}


function TableIscrizioni(language){
	$('#datatable-iscrizioni').dataTable( {
		"scrollX": true,
		"sScrollX": "100%",
		"order": [[11,"desc"]],
		"columns": [
			{ "orderable": true },  // AA
			{ "orderable": true },	// cds
			{ "orderable": true },	// insegnamento
			{ "orderable": true },	// codice
			{ "orderable": false },	// cfu
			{ "orderable": true },	// docente
			{ "orderable": false },	// tipo
			{ "orderable": true, "iDataSort": 11 },	// data e ora in formato italiano
			{ "orderable": false },	// sede
			{ "orderable": false },	// voto
			{ "orderable": false }, // box azioni
			{ "visible": false },   // data e ora in formato yyyy-mm-gg hh:mm:ss, per ordinamento
			{ "visible": false }    // stato dell'iscrizione
		],
		"sDom": "T<'box-content'<'col-sm-4'f><'col-sm-4 filtro-tipo dataTables_filter'><'col-sm-4 text-right hidden-xs'l><'clearfix'>>rt<'box-content'<'col-sm-6'i><'col-sm-6 text-right'p><'clearfix'>>",
		"sPaginationType": "bootstrap",
		"oTableTools": {
			"aButtons": []
		},
		"oLanguage": JSONLanguage(language)
	});
}


// sposta la cella che contiene la tabella degli appelli in una sottoriga di ciascun corso
function PopulateChild(name) {
	var table = $(name).DataTable();
	table.rows().every( function() {
		var row = this;
		row.child(row.data()[0]).show();
	});
	table.columns.adjust().draw();
}

// ricalcola le larghezze delle colonne e mostra il div dei risultati
function RedrawTableCorsi(name,show) {
	var table = $(name).DataTable();
	if(show)
		$("#risultati-elenco").css("display","");
	table.columns.adjust().draw();
}

function RedrawTable(tablename) {
	var oTable = $(tablename).dataTable();
	oTable.fnDraw();
}

function JSONLanguage(language) {
	var jsonParse = [];
	var jsonData = "{ ";
	
	if(language == "en") {
		jsonData += '"sEmptyTable": "No data available in table", ';
		jsonData += '"sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)", ';
		jsonData += '"sInfoEmpty": "No entries to show", ';
		jsonData += '"sInfoFiltered": "No data available in table", ';
		jsonData += '"sInfoPostFix": "", ';
		jsonData += '"sInfoThousands": "", ';
		jsonData += '"sLengthMenu": "_MENU_", ';
		jsonData += '"sLoadingRecords": "Loading data...", ';
		jsonData += '"sProcessing": "Processing data...", ';
		jsonData += '"sSearch": "Search ", ';
		jsonData += '"sZeroRecords": "No records found", ';
		jsonData += '"oPaginate": { "sFirst": "First", "sPrevious": "Previous", "sNext": "Next", "sLast":"Last" }, ';
		jsonData += '"oAria": {	"sSortAscending":  ": click to sort ascending",	"sSortDescending": ": click to sort descending"	} ';
	} else {
		jsonData += '"sEmptyTable": "Nessun dato presente nella tabella",  ';
		jsonData += '"sInfo": "Visualizzati da _START_ a _END_ di _TOTAL_ elementi", ';
		jsonData += '"sInfoEmpty": "Nessun risultato", ';
		jsonData += '"sInfoFiltered": "(filtrati da _MAX_ elementi totali)", ';
		jsonData += '"sInfoPostFix": "", ';
		jsonData += '"sInfoThousands": "", ';
		jsonData += '"sLengthMenu": "_MENU_", ';
		jsonData += '"sLoadingRecords": "Caricamento...", ';
		jsonData += '"sProcessing": "Elaborazione...", ';
		jsonData += '"sSearch": "Filtra ", ';
		jsonData += '"sZeroRecords": "La ricerca non ha prodotto alcun risultato.", ';
		jsonData += '"oPaginate": { "sFirst": "Inizio", "sPrevious": "Precedente", "sNext": "Successivo", "sLast":"Fine" },';
		jsonData += '"oAria": {	"sSortAscending":  ": attiva per ordinare la colonna in ordine crescente",	"sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"	} ';
	}
	jsonData += "}";
	jsonParse = JSON.parse(jsonData);
	return jsonParse;
}

$(document).ready(function() {
//	$('#main').css('min-height',750);
});
