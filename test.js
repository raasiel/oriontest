function ShowHideDiv(sLayerNames, sVisibility, counter)
{
	sLayerNames = sLayerNames.split(",");
	sVisibility	= sVisibility.split(",");
	for(iCounter = 0 ; iCounter < sLayerNames.length ; iCounter++)
	{ 
		document.all[sLayerNames[iCounter]].style.display = sVisibility[iCounter].toLowerCase() == 'hide' ? 'hidden' : '';
	}
	
	switch (counter)
	{
		case 1:
		{
			imgAct('img1');
			imgAct('img2');
			imgInact('img3');
			imgInact('img4');
			document.all["PARTICIPANT_DETAILS_IMG"].background=contextPath+"/images/form_tab_bg_on.gif";
			document.all["ADDITIONAL_INFO_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";
			document.all["USER_INFO_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";			
			document.all["PSFont"].style.color="#000000"; 
			document.all["PAFont"].style.color="";
			document.all["PTIFont"].style.color="";			
			currentpage = 1;
			break;
		}
		case 2:
		{
			imgInact('img1');
			imgInact('img2');			
			imgOnOff('img3');
			imgInact('img4');
			document.all["PARTICIPANT_DETAILS_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";
			document.all["ADDITIONAL_INFO_IMG"].background=contextPath+"/images/form_tab_bg_on.gif";
			document.all["USER_INFO_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";			
			document.all["PSFont"].style.color="";	
			document.all["PAFont"].style.color="#000000";
			document.all["PTIFont"].style.color="";						
			currentpage = 2;
			break;
		}
		case 3:
		{
			imgInact('img1');
			imgOffOff('img2');
			imgAct('img3');
			imgAct('img4');
			document.all["PARTICIPANT_DETAILS_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";
			document.all["ADDITIONAL_INFO_IMG"].background=contextPath+"/images/form_tab_bg_off.gif";
			document.all["USER_INFO_IMG"].background=contextPath+"/images/form_tab_bg_on.gif";			
			document.all["PSFont"].style.color="";
			document.all["PAFont"].style.color="";						
			document.all["PTIFont"].style.color="#000000";				
			currentpage = 3;
			break;
		}
		default:
			break;
	}
} 
