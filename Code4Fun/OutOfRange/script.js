$("input").change(function () {
    let inputValue = parseFloat($(this).val());
    let minValue = parseFloat($(this).attr("min"));
    let maxValue = parseFloat($(this).attr("max"));

    let isValid = inputValue >= minValue && inputValue <= maxValue;
    $(this).removeClass("valid invalid");
    isNaN(inputValue) ? undefined : $(this).addClass(isValid ? "valid" : "invalid");
});
