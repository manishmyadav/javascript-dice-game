/*Algorithm:
1)Whenever page reloads or user starts a new game scores should be zero!
2)Create a random no on every click of roll dice
3)scores should be added and displayed on final score if user clicks on hold
4)To be done after.....
*/

var no1,no2,Total_score_1,Total_score_2,active,current_score_to_add,winning_score=100;

function init(){
    document.getElementById("Current-score_display_Player_1").innerHTML=0;
    document.getElementById("Current-score_display_Player_2").innerHTML=0;
    document.getElementById("Final-score_display_player_1").innerHTML=0;
    document.getElementById("Final-score_display_player_2").innerHTML=0;
    document.getElementById("active_1").style.display="inline-block";
    document.getElementById("active_2").style.display="none";

    document.getElementById("Player-1").style.display="inline-block";
    document.getElementById("winner_1").style.display="none";
    document.getElementById("Player-2").style.display="inline-block";
    document.getElementById("winner_2").style.display="none";
    active=1;  
    current_score_to_add=0;  
    Total_score_1=0;
    Total_score_2=0;
    document.getElementById("image-1").style.display="none";
    document.getElementById("image-2").style.display="none";

    document.querySelector("#player_1_name").innerHTML = "Player 1";                   
    document.querySelector("#player_2_name").innerHTML = "Player 2";
    
}

function editNames() { 
    var player1 = prompt("Enter Player 1 name"); 
    var player2 = prompt("Enter Player 2 name"); 

    document.querySelector("#player_1_name").innerHTML = player1;                   
    document.querySelector("#player_2_name").innerHTML = player2; 

    document.querySelector("#winplayer_1").innerHTML = player1;
    document.querySelector("#winplayer_2").innerHTML = player2;

} 

function rolldice(){
    no1 = Math.ceil(Math.random() * 6);
    no2 = Math.ceil(Math.random() * 6);
    console.log(no1);
    console.log(no2);
    document.getElementById("image-1").src="images/dice-"+no1+".png";
    document.getElementById("image-2").src="images/dice-"+no2+".png";
    document.getElementById("image-1").style.display="inline-block";
    document.getElementById("image-2").style.display="inline-block";
    current_score=no1+no2;
    if((no1==1) || (no2==1)) {
        current_score_to_add=0;
        if(active==1){
            document.getElementById("Current-score_display_Player_1").innerHTML=current_score_to_add;     
        }
        else{
            document.getElementById("Current-score_display_Player_2").innerHTML=current_score_to_add;   
        }

        activeplayer();
    }
    else{
    
    if(active==1){
        current_score_to_add += current_score;
        document.getElementById("Current-score_display_Player_1").innerHTML=current_score_to_add;
        
       
    }
    else{
        current_score_to_add += current_score;
        document.getElementById("Current-score_display_Player_2").innerHTML=current_score_to_add;
        

    }
}

}

function activeplayer(){
    if(active==1){
        active=2;
        current_score_to_add=0;
        document.getElementById("active_2").style.display="inline-block";
        document.getElementById("active_1").style.display="none";
        //document.getElementById("Player-2").style.backgroundColor="rgb(103, 63, 177)";
        //document.getElementById("Player-1").style.backgroundColor="lightblue";

        
       //document.getElementById("Final-score_display_player_1").innerHTML=0;
    }
    else{
        active=1;
         current_score_to_add=0;
         document.getElementById("active_1").style.display="inline-block";
         document.getElementById("active_2").style.display="none";
         //document.getElementById("Player-1").style.backgroundColor="rgb(103, 63, 177)";
         //document.getElementById("Player-2").style.backgroundColor="lightblue";
 
        
       //document.getElementById("Final-score_display_player_2").innerHTML=0;
    }
}

function hold(){
    if(active==1){
        Total_score_1=Total_score_1+current_score_to_add;
        console.log("Total_score_1"); 
        if(Total_score_1 >= winning_score){
           // document.getElementById("Player-1").className="winner";
            document.getElementById("Player-1").style.display="none";
            document.getElementById("winner_1").style.display="inline-block";
           
            //winner_output();
            }
        else{
        document.getElementById("Final-score_display_player_1").innerHTML=Total_score_1;
        document.getElementById("Current-score_display_Player_1").innerHTML=0;
        activeplayer();
            }
        }
    else{
        console.log("linked properly");
        Total_score_2=Total_score_2+current_score_to_add;
        if(Total_score_2 >= winning_score){
            //document.getElementById("Player-2").className="winner";
            document.getElementById("Player-2").style.display="none";
            document.getElementById("winner_2").style.display="inline-block";
            
           // winner_output();
            }
        else{
        document.getElementById("Final-score_display_player_2").innerHTML=Total_score_2;
        document.getElementById("Current-score_display_Player_2").innerHTML=0;
        activeplayer();
        }
        }
    }


function winner_input(){
    winning_score=document.getElementById("Winning_score_value").value;
}


/*function winner_output(){

    if( active ==1 )
        document.getElementById("Player-1").style.zIndex="1";
    
    else
    document.getElementById("Player-2").style.zIndex="1";
}*/