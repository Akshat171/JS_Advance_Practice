const insert = document.getElementById("insert");
window.addEventListener("keyboard", (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keyboard</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    `;
});
