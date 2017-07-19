
        $(document).ready(function () {
             $("div.holder").jPages({
                    containerID: $("select#options").val(),
                    perPage: 1,
                    keyBrowse: true,
                    animation: "bounceInDown",    
                    scrollBrowse: false,
                    callback: function (pages, items) {
                      //  $("#legend1").html("Page " + pages.current + " of " + pages.count);
                       // $("#legend2").html("Elements "+items.range.start + " - " + items.range.end + " of " + items.count);
                    }
                });

            $("input#Itemsperpage").change(function () {
                /* get new no of items per page */
                var newPerPage = parseInt($(this).val());
                /* destroy jPages and initiate plugin again */
                if(newPerPage>0){
                 $(this).removeClass('red');
                 $('#items').show();
                 $("#alertMsg").hide();
                $("div.holder").jPages("destroy").jPages({
                    containerID: $("select#options").val(),
                    perPage: newPerPage,
                    keyBrowse: true,
                    animation: "bounceInDown",
                    scrollBrowse: false,
                    callback: function (pages, items) {
                      //  $("#legend1").html("Page " + pages.current + " of " + pages.count);
                       // $("#legend2").html("Elements "+items.range.start + " - " + items.range.end + " of " + items.count);
                    }
                });
            }else{
                $(this).addClass('red');
                 $('#items').hide();
                 $("#alertMsg").show();
            }
            });
            $("select#options").change(function () {
                /* get new css animation */
                var itemContainer = $(this).val();
                if(itemContainer=="itemContainerA"){
                    $("div#itemContainerA").show();
                    $("div#itemContainerB").hide();
                }else{
                   $("div#itemContainerB").show();
                    $("div#itemContainerA").hide(); 
                }
                /* destroy jPages and initiate plugin again */
                
                $("div.holder").jPages("destroy").jPages({
                    containerID: itemContainer,
                    perPage: $("input#Itemsperpage").val(),
                    animation: "bounceInDown",
                    keyBrowse: true,
                    scrollBrowse: false,
                    callback: function (pages,
        items) {
                      //  $("#legend1").html("Page " + pages.current + " of " + pages.count);
                       // $("#legend2").html("Elements "+items.range.start + " - " + items.range.end + " of " + items.count);
                    }
                });
            });
        });
    
    