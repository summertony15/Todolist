$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");
});

// 點擊X 刪除該列
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		// 讀取輸入新資料
		var todoText = $(this).val();
		$(this).val("")
		// 新增一個ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})