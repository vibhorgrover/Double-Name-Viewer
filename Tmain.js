
name_of_the_array=[]


function submit(){
display_student_array=[]
for(i=1; i<=4; i++){
name_of_the_student=document.getElementById("name_of_the_student_"+i).value
name_of_the_array.push(name_of_the_student)

}
console.log(name_of_the_array)

var length = name_of_the_array.length


for(k=0; k<length; k++){
display_student_array.push("<h4>Name-"+name_of_the_array[k]+"</h4>")



}
document.getElementById("display_name_with_commas").innerHTML=display_student_array
var remove = display_student_array.join(" ")
document.getElementById("display_name_without_commas").innerHTML=remove


}

