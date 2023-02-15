# SQL Database

> 
<details><summary>Challenges 1</summary> 
<p>

#### **SQL - task**
**Create 3 tables using** `create table`
The first table of books which contains
1. Name of the book
2. The language of the book
3. Quantity of pages
   Write the table in 10 books with the help of `Insert`
   Then you will output all the information to the screen with the help of select

The second table of students, which contains
1. His ID number
2. Student name
3. His degree
   Fill in the table with 10 students using insert
   Then you will output all the information to the screen with the help of select
   Please treat the data in a serious way that there will be no duplication of data, no incorrect data, the type of information entered in a correct manner,
   It is very important to pay attention, for every comma a period and the parentheses and the regular comma
</p>
</details>

> 
<details><summary>Challenges 1</summary> 
<p>

#### **Docker - task**
Write two servers, that make them talk to each other, and then
1.	create a docker file for every one of them
2.	run the first image (in terminal 1)
3.	run the second image (in terminal 2)
4.	display how they communicate (with logs) with each other
5.	and try to run one of the servers on the remote (on the web)
</p>
</details>

create table student(
id varchar(9) primary key,
firstName varchar(15) not null,
lastName varchar(15) not null,
age numeric not null,
levels varchar(2) not null,
student_campus REFERENCES campus(classroom)
);

insert into student values 
("123456789","elias","lastname",29,"b",123),
("112233445","tayser","lastname",27,"b",123),
("223344556","amal","lastname",36,"b",123),
("334455667","karem","lastname",23,"b",123),
("445566778","amer","lastname",33,"b",123);

create table courses(
courseID numeric primary key,
course name varchar(8) not null,
description text not null,
hour numeric not null,
startAt datetime not null,
endAt datetime not null
);

create table campus(
classroom numeric not null,
floor numeric not null,
booked boolean not null,
teacherName	varchar(15) not null,
building varchar(20) not null
);

insert into campus values 
(123,14,true,"hoseen","b"),
(234,7,true,"yosef","b"),
(456,12,true,"manar","b"),
(123,2,false,"neven","b"),
(234,5,false,"aiman","b");