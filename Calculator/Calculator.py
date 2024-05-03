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
    
#Buttons

b1 = Button(window, text = "1", width = 5, height = 2, command = lambda: click_button(1))
b2 = Button(window, text = "2", width = 5, height = 2, command = lambda: click_button(2))
b3 = Button(window, text = "3", width = 5, height = 2, command = lambda: click_button(3))
b4 = Button(window, text = "4", width = 5, height = 2, command = lambda: click_button(4))
b5 = Button(window, text = "5", width = 5, height = 2, command = lambda: click_button(5))
b6 = Button(window, text = "6", width = 5, height = 2, command = lambda: click_button(6))
b7 = Button(window, text = "7", width = 5, height = 2, command = lambda: click_button(7))
b8 = Button(window, text = "8", width = 5, height = 2, command = lambda: click_button(8))
b9 = Button(window, text = "9", width = 5, height = 2, command = lambda: click_button(9))
b0 = Button(window, text = "0", width = 5, height = 2, command = lambda: click_button(0))

button_erase = Button(window, text = "AC", width = 5, height = 2, command = lambda: erase())
button_parenthesis_Right = Button(window, text = "(", width = 5, height = 2, command = lambda: click_button("("))
button_parenthesis_Left = Button(window, text = ")", width = 5, height = 2, command = lambda: click_button(")"))
button_point = Button(window, text =".", width = 5, height= 2, command= lambda: click_button("."))

button_div = Button(window, text= "/", width= 5, height= 2, command= lambda: click_button("/"))
button_multiply = Button(window, text= "*", width= 5, height= 2, command= lambda: click_button("*"))
button_sum = Button(window, text= "+", width= 5, height= 2, command= lambda: click_button("+"))
button_rest = Button(window, text= "-", width= 5, height= 2, command= lambda: click_button("-"))
button_equal = Button(window, text= "=", width= 5, height= 2, command= lambda: operation())

#Add buttons to the window

button_erase.grid(row= 1, column= 0, padx= 5, pady= 5)
button_parenthesis_Right.grid(row= 1, column= 1, padx= 5, pady= 5)
button_parenthesis_Left.grid(row= 1, column= 2, padx= 5, pady= 5)
button_div.grid(row= 1, column= 3, padx= 5, pady= 5)

b7.grid(row= 2, column=0, padx= 5, pady= 5)
b8.grid(row= 2, column=1, padx= 5, pady= 5)
b9.grid(row= 2, column=2, padx= 5, pady= 5)
button_multiply.grid(row= 2, column= 3, padx= 5, pady= 5)

b4.grid(row= 3, column= 0, padx= 5, pady= 5)
b5.grid(row= 3, column= 1, padx= 5, pady= 5)
b6.grid(row= 3, column= 2, padx= 5, pady= 5)
button_sum.grid(row= 3, column= 3, padx= 5, pady= 5)

b1.grid(row= 4, column= 0, padx= 5, pady= 5)
b2.grid(row= 4, column= 1, padx= 5, pady= 5)
b3.grid(row= 4, column= 2, padx= 5, pady= 5)
button_rest.grid(row= 4, column= 3, padx= 5, pady= 5)

b0.grid(row= 5, column= 0, columnspan= 2, padx= 5, pady= 5)
button_point.grid(row= 5, column= 2, padx= 5, pady= 5)
button_equal.grid(row= 5, column= 3, padx= 5, pady= 5)


window.mainloop()
