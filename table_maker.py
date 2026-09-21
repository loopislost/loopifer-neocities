lst = []

with open("/home/loop/SAVE THIS PLEASE/loopifer-neocities/public/txt_csv/bookreview_table.csv", 'r') as myfile:
    for line in myfile:
        row = line.strip().split(',')
        lst.append(row)

with open("/home/loop/SAVE THIS PLEASE/loopifer-neocities/public/txt_csv/table_out.txt", 'w') as myfile:
    myfile.write("<table>\n")
    myfile.write("<tr>\n")
    for category in lst[0]:
        string = "<th>" + category + "</th>"
        myfile.write(string)
    myfile.write("\n</tr>")
    for row in lst[1:]:
        myfile.write("<tr>\n")
        for cell in row:
            string = "<td>" + cell + "</td>"
            myfile.write(string)
        myfile.write("\n</tr>")
    myfile.write("</table>")
