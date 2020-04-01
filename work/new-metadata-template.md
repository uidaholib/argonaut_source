# Argonaut metadata template

> revised template for Spring 2020 project

## objectid

The ID for the individual issue, following format:
`arg-yyyy-mm-dd`.
Filling this field automated.

## cdmid

The CONTENTdm ID.
Filling this field automated.

## title

Title is generally just the full date of the issue written out. 
Filling this field automated.

Please check to ensure the title and date match the actual PDF issue you are looking at, and note any disagreement.

If the issue has a special title highlighted on the front page, please add the special title to the end of the automated title after a dash.

For example, arg-1993-04-01 is a special April Fools edition, the title field should be "April 1st, 1993 - Cosmonaut: Fools Issue".

## date

Full date of the issue in ISO format, yyyy-mm-dd.
Include leading zeros for single digit numbers.
Filling this field automated.

## year

Four digit year.
Filling this field automated.

## index_description 

This is a pre-existing field drawn from an old Argonaut index created for microfilm collection. 
It was formatted a as a list of notable subjects along with a page number and column. 
Do not add to this column.

## headlines

A list of headlines drawn from the issues, separated by a semi-colon, `;`.

To create the headlines field, view the issue PDF. 
Start looking over the front page. 
Copy all headlines from the front page into the spreadsheet, separating each using a semi-colon. 
Scan through the rest of the issue and copy any additional major headlines.
After each additional headline add the PDF page number in parenthesis, like (p2).
You do not need to copy all headlines in the issue. 
Instead focus on finding headlines that relate to university events and happening on campus. 
Imagine a future user wanting to discover interesting university history.
Leave out headlines that are regular column titles, such as "NOTICE" or "In brief". 

Example:
"Replies list ice rink, pool as top requests; Tri Delta Selected As Dream Girl; Theta to compete in mag. contest; Idaho band to present a concert; Companies make awards to students; Board Considers funds for coed; Registrar reports fewer drop-outs; Phi Mu Alpha to host provice Sinfonia meet; G. Thomas takes study assignment at Northwestern; Army to nab 3 students next month; "Engineer" starts 30th year in may; Researchers confer here this week; Dates set for one-acts; University doctors attend Boise meet; Professor serves on Park Board; KUOI plans, changes told (p2); Gerald Leigh attends cadet AROTC meet (p2); Mystery sickness limited to already stricken area (p5)" 

Keep in mind the basic format of the issues changes over time. 

Argonauts from early 1900's have a dense front page with many columns and many individual headlines. 
These headline will often include a larger title and a smaller subtitle. 
Please include both if it helps illuminate the topics covered. 
For example, "Home economics group will hear of eastern meet: University instructors to address district association tomorrow;".

Sometime past 1950's the format shifts to one more familiar today, with only a couple top stories appearing on the front page. 
"Headline" fields for these issues will include more items from additional pages. 
Often the front page will include a "contents" box that will be a good clue for finding important stories to include.

## subject

A list of notable subjects contained within the issue, separated by a semi-colon, `;`.

These subjects are U of I specific and do not use a controlled vocabulary.
They should help users discover unique content and topics such as news related to U of I specific organizations, people, and events.
Subjects should not try to cover everything in the issue, but represent a curated list of the most important and prevalent topics.

After scanning through an issue, you should have a good sense of appropriate subjects.
Think about topics which are not captured directly in the "headlines" text, but seem important to communicate what a major story is about.

Subjects used in existing records can be seen in work/argo_subjects_old.csv

## cdm_pdf_link

a link to the PDF on CONTENTdm
