from tkinter import *

window = Tk()
window.title("Calculator")

i = 0

#Entry
e_text = Entry(window, font = ("Calibri 20"))
e_text.grid(row = 0, column = 0, columnspan = 4, padx = 5, pady = 5)

#Functions
def click_button(value):
    global i
    e_text.insert(i, value)
    i += 1
    
def erase():
    e_text.delete(0, END)
    i = 0
    
def operation():
    equation = e_text.get()
    result = eval(equation)
    e_text.delete(0, END)
    e_text.insert(0, result)
    i = 0
    
    window.mainloop()