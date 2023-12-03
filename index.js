
const content = "안녕하세요. 반갑습니다. 돔돔이블로그에 오신 것을 환영합니다 ! 😍😍😍";
const text = document.querySelector(".article_1 > section > .text");
text.textContent = "aaa";
let txtIdx = 0;

function typing() {
  let txt = content[txtIdx++];
  if (txt == undefined) return;
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (txtIdx > content.length) {
    txtIdx = 0;
  } else {
    setTimeout(typing, 100);
  }
}
typing();