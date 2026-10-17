
def extract_txt(filename):

    lst = []
    extract = []

    with open(filename, 'r') as myfile:
        lst = myfile.readlines()
        for i in range(len(lst)):
            if lst[i][0:3] == '#!D':
                date_ = lst[i][7:].strip()
                type_ = lst[i+1][7:].strip()
                title = lst[i+2][8:].strip()
                author = lst[i+3][9:].strip()
                rating = lst[i+4][9:-4].strip()
                extract.append(f'{date_},{type_},{title},{author},{rating}')
    return extract

def print_to_csv(extracted):
    with open("public/docs/outfile.csv", "w") as outfile:
        for line in extracted:
            outfile.write(line + '\n')

def csv_to_html(filename):

    lst = []

    with open("public/docs/outfile.csv", 'r') as myfile:
        for line in myfile:
            row = line.strip().split(',')
            lst.append(row)
    #print(lst)

    with open(filename, 'w') as myfile:
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

def main():
    txt = ["Date,MediaType,Title,Author/Creator,Rating"]    
    txt += extract_txt("public/docs/bookreviews.txt") + extract_txt("public/docs/more reviews.txt")
    print_to_csv(txt)
    csv_to_html("content/_includes/table.njk")
main()
