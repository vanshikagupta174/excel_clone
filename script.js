let defaultProperties = {
    text: "",
    "font-weight": "",
    "font-style": "",
    "text-decoration": "",
    "text-align": "left",
    "background-color": "#ffffff",
    "color": "#000000",
    "font-family": "Noto Sans",
    "font-size": "14px"
}

let cellData = {
    "Sheet1" : {}
}

let selectedSheet = "Sheet1";
let totalSheets = 1;
let lastlyAddedSheet = 1;

$(document).ready(function () {
 for(let i=1;i<=100;i++){
  let ans="";
  let n=i;
  while(n>0){
   let rem=n%26;
   if(rem==0){
    ans="Z"+ans;
    n=Math.floor(n/26)-1;
   }else{
    ans=String.fromCharCode(rem-1+65)+ans;
    n=Math.floor(n/26);
   }
  }
  let column= $(`<div class="column-name  colId-${i}" id="colCod-${ans}">${ans}</div>`);
  $(".column-name-container").append(column);
  let row=$(`<div class="row-name" id="rowId-${i}">${i}</div>`);
  $(".row-name-container").append(row);
 }

 for(let i=1;i<=100;i++){
  let row=$(`<div class="cell-row"></div>`);
  for(let j=1;j<=100;j++){
   let colCode=$(`.colId-${j}`).attr("id").split("-")[1];
   let column=$(`<div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data="code-${colCode}"></div>`);
   row.append(column);
  }
  $(".input-cell-container").append(row);
 }

 $(".align-icon").click(function () {
  $(".align-icon.selected").removeClass("selected");
  $(this).addClass("selected");
 });
 
 $(".style-icon").click(function () {
  $(this).toggleClass("selected");
 });
/*
 $(".input-cell").click(function (e) {
  if(e.ctrlKey){
   let [rowId,colId]=getRowCol(this);
   if(rowId>1}{
    let topcellselected=$(`#row-$(rowId-1}-col-${colId}`).hasClass("selected");
    if(topcellselected){
     $(this).addClass("top-cell-selected");
     $(`#row-${rowId-1}-col-${colId}`).addClass("bottom-cell-selected");
    }
   }
  }else{
   $(".input-cell.selected").removeClass("selected");
   $(this).addClass("selected");
  }
 });*/
 
 $(".input-cell").dblclick(function () {
  $(".input-cell.selected").removeClass("selected");
  $(this).addClass("selected");
  $(this).attr("contenteditable","true");
  $(this).focus();
 });

 $(".input-cell").blur(function() {
  $(".input-cell.selected.").attr("contenteditable","false");
 });
 
 $(".input-cell-container").scroll(function () {
  $(".column-name-container").scrollLeft(this.scrollLeft);
  $(".row-name-container").scrollTop(this.scrollTop);
 });

});

function getRowCol(ele){
 let idArray=$(ele).attr("id").split("-");
 let rowId= parseInt(idArray[1]);
 let colId=parseInt(idArray[3]);
 return [rowId,colId];
}

function updatecell(property,value){
 $(".input-cell-selected").each(function() {
  $(this).css(property,value);
 });
}

$(".icon-bold").click(function() {
 if($(this).hasClass("selected")){
  updateCell("font-weight","");
 }else{
  updateCell("font-weight","bold");
 }
});
