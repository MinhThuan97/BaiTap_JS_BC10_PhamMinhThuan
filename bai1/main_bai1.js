
document.write("<table>")
for (var i = 1; i < 100; i += 10) {
    document.write("<tr>")
    for (var j = i; j < i + 10; j++) {
        document.write("<td>" + j + "<td>");
    }

    document.write("<tr>");
}

document.write("</table>")

