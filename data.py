# string before 'f Georgian' is womans name
# string before 'm Georgian' is mans name
# surname is before '('

def get_name(file_name, sex):
    names = []
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:
            if sex in line:
                names.append(line.split(" ")[1])
    return names

def get_surname(file_name):
    surnames = []
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:
            if "(" in line:
                surnames.append(line.split("(")[0])
    return surnames

if __name__ == "__main__":
    womans = get_name("data.txt", "f Georgian")
    mans = get_name("data.txt", "m Georgian")
    surname = get_surname("data.txt")

    print(womans)
    print(mans)
    print(surname)

