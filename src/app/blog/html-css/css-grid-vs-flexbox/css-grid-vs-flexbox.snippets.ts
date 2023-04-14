export const gridHtmlSnippet = `<div class="container">
    <header>HEADER</header>
    <main>CONTENT</main>
    <aside>ADVERTISEMENTS</aside>
    <footer>FOOTER</footer>
</div>

.container {
    display: grid;
    grid-template-areas: "header header header
    content content advertisements
    content content advertisements
    content content advertisements
    footer footer footer";
}
header {
    grid-area: header;
}
main {
    grid-area: content;
}
aside {
    grid-area: advertisements;
}
footer {
    grid-area: footer;
}`;

export const flexboxHtmlSnippet = `<header>
    <a href="#">HOME</a>
    <a href="#">LOGIN</a>
    <a href="#">SEARCH</a>
    <a href="#">CONTACT US</a>
</header>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header > div:nth-child(4) {
    margin-left: auto;
}`;
