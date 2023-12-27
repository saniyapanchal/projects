import sys

def greet_user(name):
    print("Hello,", name + "!")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        name = sys.argv[1]
        greet_user(name)
    else:
        name = input("Enter your name: ")
        greet_user(name)
