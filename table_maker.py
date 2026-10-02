
def txt_to_csv():

    lst = []
    extract = []

    with open("public/txt_csv/bookreviews.txt", 'r') as myfile:
        lst = myfile.readlines()
        for i in range(len(lst)):
            if lst[i][0:3] == '#!D':
                date_ = lst[i][7:].strip()
                type_ = lst[i+1][7:].strip()
                title = lst[i+2][8:].strip()
                author = lst[i+3][9:].strip()
                rating = lst[i+4][9:].strip()
                extract.append(f'{date_},{type_},{title},{author},{rating}')
    #print(extract)
    with open("public/txt_csv/outfile.csv", "w") as outfile:
        for line in extract:
            outfile.write(line + '\n')

def csv_to_html():

    lst = []

    with open("/home/loop/SAVE THIS PLEASE/loopifer-neocities/public/txt_csv/bookreview_table.csv", 'r') as myfile:
        for line in myfile:
            row = line.strip().split(',')
            lst.append(row)
    print(lst)

    with open("/home/loop/SAVE THIS PLEASE/loopifer-neocities/public/txt_csv/table_out.txt", 'w') as myfile:
        myfile.write("<table>\n")
        myfile.write("<tr>")
        for category in lst[0]:
            string = "<th>" + category + "</th>"
            myfile.write(string)
        myfile.write("</tr>")
        for row in lst[1:]:
            myfile.write("<tr>")
            for cell in row:
                string = "<td>" + cell + "</td>"
                myfile.write(string)
            myfile.write("</tr>")
        myfile.write("\n</table>")
#txt_to_csv()

csv_to_html()
