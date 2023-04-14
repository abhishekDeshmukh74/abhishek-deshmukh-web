export const eventListenerAddSnippet = `// Syntax to catch an event on the bubbling(default) phase
htmlElement.addEventListener(...)
or
htmlElement.addEventListener(..., {capture: false})

// Syntax to catch an event on the capturing phase
htmlElement.addEventListener(..., {capture: true})
// "true" is an alias to {capture: true}
htmlElement.addEventListener(..., true)
`;

export const eventBubblingHtmlSnippet = `<div id="div1" style="height:400px; width:50%; border:7px yellow solid;">
    <div id="div2" style="height:300px; width:80%; border:7px yellow solid; margin:7%">
        <div id="div3" style="height:200px; width:70%; border:7px yellow solid; margin:12%"></div>
    </div>
</div>`;

export const eventBubblingJsSnippet = `const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

div1.addEventListener("click", function (event) { alert("Clicked on div 1") }, false);
div2.addEventListener("click", function (event) { alert("Clicked on div 2") }, false);
div3.addEventListener("click", function (event) { alert("Clicked on div 3") }, false);`;

export const eventCapturingHtmlSnippet = `<div id="div1" style="height:400px; width:50%; border:7px yellow solid;">
    <div id="div2" style="height:300px; width:80%; border:7px yellow solid; margin:7%">
        <div id="div3" style="height:200px; width:70%; border:7px yellow solid; margin:12%"></div>
    </div>
</div>`;

export const eventCapturingJsSnippet = `const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

div1.addEventListener("click", function (event) { alert("Clicked on div 1") }, true);
div2.addEventListener("click", function (event) { alert("Clicked on div 2") }, true);
div3.addEventListener("click", function (event) { alert("Clicked on div 3") }, true);`;
