exports.templateTop = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>primary interests calendar</title>
</head>
<body>`

exports.templateBottom = `
<style>
    body {
        background-color: #FDFCFB;
        color: rgb(58, 58, 58);
        font-family: var(--body-font, "Degular Text")
    }
    h1 {
        color: #585858;
        font-family: var(--header-font, "Redaction 35")
    }
    
    a[href^="https://"]:after {
        background-image: none!important;
    }
    .calendar{
        width: 600px;
        height: auto;
        margin: 0 auto;
        display: block;
        background-color: #FDFCFB;
    }

    .calendar > * {
        vertical-align: middle;
        margin: 1px;
    }

    .calendar h3 {
        margin: 15px 0px;
    }

    .tooltip {
        display: inline-block;
    }

    .day {
        outline: 1px solid grey;
        width: 20px;
        text-align: center;
        justify-content: center;
        height: 35px;
        display: inline-block;
        padding: 5px 0px;
        text-transform: lowercase;
        font-size: larger;
    }

    .day:empty {
        cursor: auto;
        background-color: white;
        color: white;
        position: relative;
    }

    .day:not(:empty) {
        cursor: pointer;
        background-color: rgb(240, 240, 240);
        color: #585858;
        position: relative;
    }

    .day:not(:empty):hover::after {
        background: #FDFCFB;
        border: 1px solid grey;
        border-radius: 4px;
        color: #585858;
        bottom: 100%;
        content: attr(data-content);
        display: block;
        position: absolute;    
        width: fit-content;
        height: fit-content;
        white-space: pre;
        z-index: 1;
        text-transform: capitalize;
        text-align: start;
    }

</style>`    
