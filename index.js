const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const targetEle = e.target;
  console.log(targetEle);
  const isReply = targetEle.classList.contains("reply");
  const isSubmit = targetEle.classList.contains("submit");
  if (isReply) {
    createReplyInput(e);
  } else if (isSubmit) {
    createComment(e);
  }
});

function createComment(e) {
  const fragment = document.createDocumentFragment();
  const comment = e.target.parentNode.children[0].value;

  const commentContainer = document.createElement("div");
  commentContainer.setAttribute("class", "comment-card");
  commentContainer.innerHTML = `<h3>${comment}</h3>
          <div class="reply">Reply</div>
  `;

  let commentReplyBox = e.target.parentNode;
  let parentComment = commentReplyBox.parentNode;

  parentComment.replaceChild(commentContainer, commentReplyBox);
}

function createReplyInput(e) {
  const fragment = document.createDocumentFragment();

  const replyContainer = document.createElement("div");

  const input = document.createElement("input");

  const btn = document.createElement("button");

  replyContainer.setAttribute("class", "comment-reply-container");
  input.setAttribute("class", "text");
  input.setAttribute("placeholder", "write your comment");
  btn.setAttribute("class", "submit");
  btn.innerText = "Submit";

  replyContainer.appendChild(input);
  replyContainer.appendChild(btn);
  fragment.appendChild(replyContainer);

  e.target.parentNode.appendChild(fragment);
}
