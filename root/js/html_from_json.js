function get_lectors(sel_number){

	var x = new XMLHttpRequest(); 
    x.open("GET","/root/json/lectors.json",false); 
    x.send(); 
    lectors = x.responseText;     
    var lectors_arr = JSON.parse(lectors);

    theme = '';
    switch (sel_number)
	{
	  case 2: theme = 'instruments'
	        break;
	  case 3: theme = 'technologies'
	        break;
	  case 4: theme = 'languages'
	       break;
	  case 5: theme = 'design'
	       break;
	  case 6: theme = 'frameworks'
	       break;
	}
	var cpl_content;
    if (sel_number > 1){
        query_str = '.lectors{.' + theme + '==1}.lector';
        cpl_content = yr.run('lectors', JSPath.apply(query_str, lectors_arr));
    } else{ 
     	cpl_content = yr.run('lectors', JSPath.apply('.lectors.lector', lectors_arr));
    }
    return cpl_content;
}

function get_lecture(id){

    var x = new XMLHttpRequest(); 
    x.open("GET","./json/lectures.json",false); 
    x.send(); 
    lectures=x.responseText; 

    var lectures_arr = JSON.parse(lectures);
    lecture = JSPath.apply('.lectures{.id === ' + String(id) + '}', lectures_arr)[0];
    var cpl_content        = yr.run('lecture', lecture);
    return cpl_content;
}