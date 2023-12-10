// Na het aanklikken van een toggle met id "myCheckbox" wordt de div zichtbaar of onzichtbaar gemaakt
$('#toggle').on('click', () => {
    $('#div1').slideToggle();
});