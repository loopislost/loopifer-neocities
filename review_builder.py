
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

def make_readable_html(infile,outfile): # converts my bookreviews.txt into an html/njk file to improve readability on the website
    filelst = []
    with open(infile, 'r') as myfile:
        for line in myfile:
            filelst.append(line)
    #print(filelst)

    endlst = []
    x = 0
    while x < len(filelst):
        if filelst[x][0] == "#": # line is part of info tags: start process here
            item = []
            date = filelst[x][8:].strip()
            x += 2
            title = filelst[x][9:].strip()
            x += 1
            author = filelst[x][10:].strip()
            x += 1 
            rating = filelst[x][10:].strip()
            topstring = f'<b>{rating}</b> -- <i>{title}</i> by {author} ({date})'
            item.append(topstring)
            x += 2
            textstring = ''
            while filelst[x][0] != '#':
                #print("inwhileloop" + str(x))
                if filelst[x] == '\n' or filelst[x][0] in ["_",">"]: # Skip
                    #print("empty line" + str(x))
                    pass
                else: 
                    textstring += f'<p>{filelst[x]}</p>'
                if x+1 >= len(filelst):
                    break
                x += 1
            item.append(textstring)
            #print(item)
            endlst.append(item)
            x -= 1
        x+=1
    #print(endlst)
    
    with open(outfile, "w") as myfile:
        finalstring = ''
        for item in endlst:
            finalstring += "<details class='review' open><summary>" + item[0] + "</summary>" + item[1] + "</details>"
            myfile.write(finalstring + '\n')
            finalstring = ''

def main():
    txt = ["Date,MediaType,Title,Author/Creator,Rating"]    
    txt += extract_txt("public/docs/bookreviews.txt") + extract_txt("public/docs/otherreviews.txt")
    print_to_csv(txt)
    csv_to_html("content/_includes/table.njk")
    make_readable_html("public/docs/bookreviews.txt","content/_includes/bookreviews-inner.njk")
    make_readable_html("public/docs/otherreviews.txt","content/_includes/otherreviews-inner.njk")

main()