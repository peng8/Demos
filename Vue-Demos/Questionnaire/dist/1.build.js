webpackJsonp([1,4],{4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new Date;e["default"]={props:["showCalendar"],data:function(){return{weekList:["日","一","二","三","四","五","六"],currentYear:n.getFullYear(),currentMonth:n.getMonth()+1}},computed:{yearList:function a(){for(var a=[],t=1900;t<2051;t++)a.push(t);return a},monthList:function i(){for(var i=[],t=1;t<=12;t++)i.push(t);return i},tableData:function(){for(var t=[],e=new Date(this.currentYear,this.currentMonth-1,1),n=864e5,a=e.getDay(),i=e.getTime()-a*n,s=0;s<6;s++){t[s]=[];for(var o=0;o<7;o++)t[s].push(new Date(i)),i+=n}return t}},methods:{incrMonth:function(){12===this.currentMonth?(this.currentMonth=1,this.currentYear++):this.currentMonth++},decrMonth:function(){1===this.currentMonth?(this.currentMonth=12,this.currentYear--):this.currentMonth--},handleClick:function(t){if(t.target.dataset.date){var e=new Date(parseInt(t.target.dataset.date));this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1,this.$dispatch("date-change",e),this.showCalendar=!1}}}}},6:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"#calendar{width:300px;border:1px solid #ccc;border-radius:3px;box-sizing:border-box;padding:10px;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#calendar .calendar-selections{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%;height:30px}#calendar .calendar-selections span{display:inline-block;height:24px;line-height:24px;cursor:pointer}#calendar .calendar-selections_month,#calendar .calendar-selections_year{width:90px;height:24px}#calendar .calendar-selections_month option,#calendar .calendar-selections_year option,#calendar table{text-align:center}#calendar table{width:100%;border-collapse:collapse}#calendar table,#calendar td,#calendar th{border:none}#calendar tr{height:26px}#calendar td{cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}#calendar td:hover{background-color:#cce5ff}#calendar .not-current-month{color:#aaa}",""])},7:function(t,e){t.exports=' <div id=calendar> <div class=calendar-selections> <span class=calendar-selections_last @click=decrMonth> <i class="fa fa-chevron-left"></i> </span> <select name=year class=calendar-selections_year v-model=currentYear> <option v-for="year in yearList">{{year}}</option> </select> <select class=calendar-selections_month v-model=currentMonth> <option v-for="month in monthList">{{month}}</option> </select> <span class=calendar-selelctions_next @click=incrMonth> <i class="fa fa-chevron-right"></i> </span> </div> <table @click.stop=handleClick($event)> <thead> <tr><th v-for="week in weekList">{{week}}</th></tr> </thead> <tbody> <tr v-for="row in tableData"> <td v-for="date in row" :class="{\'not-current-month\': date.getMonth()!==currentMonth-1}" :data-date=date.getTime()> {{date.getDate()}} </td> </tr> </tbody> </table> </div> '},8:function(t,e,n){var a,i;n(9),a=n(4),i=n(7),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},9:function(t,e,n){var a=n(6);"string"==typeof a&&(a=[[t.id,a,""]]);n(2)(a,{});a.locals&&(t.exports=a.locals)},17:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=a(i),o=n(8),r=a(o);e["default"]={data:function(){return{showSelections:!1,showMask:!1,showCalendar:!1,questItem:{},typeMap:{radio:"单选",checkbox:"多选",textarea:"问答"}}},methods:{addItem:function(t){var e=t.target;"span"===e.nodeName.toLowerCase()&&(this.showMask=!0,this.questItem.type=e.dataset.type)},handleInput:function(t){var e=t.target;if("button"===e.nodeName.toLowerCase()){var n=this.$els.itemTitle,a=this.$els.itemSelections;"confirm"===e.dataset.operation?"textarea"===this.questItem.type?this.addTextarea(n):this.addSelections(n,a):this.handleCancel()}},addTextarea:function(t){""!==t.value.trim()&&(this.questItem.title=t.value.trim(),this.questionnaire.questItemList.push(this.questItem),this.handleCancel())},addSelections:function(t,e){""!==t.value.trim()&&""!==e.value.trim()&&(this.questItem.title=t.value.trim(),this.questItem.selections=e.value.trim().split(/\s+/),this.questItem.name=Date.now(),this.questionnaire.questItemList.push(this.questItem),this.handleCancel())},handleCancel:function(){this.$els.itemTitle.value="",this.$els.itemSelections.value="",this.questItem={},this.showMask=!1},handleItemOperation:function(t,e){var n=t.target.dataset.operation;switch(n){case"up":this.moveUp(e);break;case"down":this.moveDown(e);break;case"remove":this.removeQuestItem(e);break;case"reuse":this.reuseQuestItem(e);break;default:throw new Error("该操作operation不存在！")}},moveUp:function(t){var e=this.questionnaire.questItemList.indexOf(t);this.questionnaire.questItemList.$remove(t),this.questionnaire.questItemList.splice(e-1,0,t)},moveDown:function(t){var e=this.questionnaire.questItemList.indexOf(t);this.moveUp(this.questionnaire.questItemList[e+1])},removeQuestItem:function(t){this.questionnaire.questItemList.$remove(t)},reuseQuestItem:function(t){var e=this.questionnaire.questItemList.indexOf(t),n=JSON.parse((0,s["default"])(t));"textarea"!==n.type&&(n.name=Date.now()),this.questionnaire.questItemList.splice(e+1,0,n)},submit:function(t){var e=t.target.dataset.operation;return""===this.questionnaire.title.trim()?void alert("问卷的标题不能为空！"):0===this.questionnaire.questItemList.length?void alert("请至少设置一个问题！"):!this.questionnaire.deadline||this.questionnaire.deadline<Date.now()?void alert("问卷的截止时间必须在今天之后！"):void("save"===e?this.save():this.publish())}},components:{Calendar:r["default"]},events:{"date-change":function(t){var e=new Date(t);this.$els.deadline.value=e.toLocaleDateString(),this.questionnaire.deadline=e.getTime()}},vuex:{actions:{save:function(t){var e=t.dispatch;this.questionnaire.state="未发布",e("UPDATE_QUEST",this.questionnaire),this.$router.go("/preview/"+this.questionnaire.id)},publish:function(t){var e=t.dispatch;this.questionnaire.state="已发布",e("UPDATE_QUEST",this.questionnaire),this.$router.go("/preview/"+this.questionnaire.id)},setCurrentQuest:function(t,e){var n=t.dispatch;n("SET_QUEST",e)}},getters:{questionnaire:function(t){return t.currentQuestionnaire},questionnaireList:function(t){return t.questionnaireList}}},route:{data:function(t){var e=this,n=t.to,a=t.next,i=n.params.questId;this.questionnaire||this.questionnaireList.forEach(function(t){if(parseInt(t.id)===parseInt(i))return void e.setCurrentQuest(t)}),a()}}}},32:function(t,e){t.exports=' <div id=create v-if=!$loadingRouteData> <div class=quest> <div class=quest-title> <input type=text class=quest-title_input placeholder=请输入问卷的标题 v-model=questionnaire.title /> </div> <div v-for="questItem in questionnaire.questItemList" class=questItem track-by=$index> <p class=questItem-title> <span>{{$index+1}}、{{typeMap[questItem.type]}}：</span> <span v-text=questItem.title></span> </p> <div v-if="questItem.type===\'textarea\'"> <textarea></textarea> </div> <div v-else> <div v-for="selection in questItem.selections" class=selection> <input :type=questItem.type :name=questItem.name :id=questItem.name+$index :class=questItem.type /> <label v-text=selection :for=questItem.name+$index></label> </div> </div> <div class=item-operation @click="handleItemOperation($event, questItem)"> <button type=button v-if="$index != 0" data-operation=up>上移</button> <button type=button v-if="$index != questionnaire.questItemList.length-1" data-operation=down>下移</button> <button type=button data-operation=remove>删除</button> <button type=button data-operation=reuse>复用</button> </div> </div> <div class=add> <div class=add-items v-show=showSelections transition=expand @click.stop=addItem($event)> <span data-type=radio>单选题</span> <span class=middle data-type=checkbox>多选题</span> <span data-type=textarea>文本题</span> </div> <div class=add-button> <button type=button @click.stop="showSelections=!showSelections">添加问题</button> </div> </div> </div> <div class=mask v-if=showMask> <div class=mask-prompt> <div class=prompt-header>请输入详细信息</div> <div class=prompt-body> <div> <label>问题名称：</label> <input type=text placeholder=请输入标题 v-el:item-title/> </div> <div> <label>选项：</label> <input type=text placeholder=请输入选项 v-el:item-selections :disabled="questItem.type === \'textarea\'"/> <p class=prompt>*&nbsp;不同选项之间请以空格隔开</p> </div> </div> <div class=prompt-footer @click.stop=handleInput($event)> <button type=button data-operation=confirm>确定</button> <button type=button data-operation=cancel>取消</button> </div> </div> </div> <div class=submit> <div class=deadline> <label>问卷截止日期：</label> <input type=text placeholder=点击选择问卷截止日期 readonly=readonly v-el:deadline :value="new Date(questionnaire.deadline).toLocaleDateString()" @click.stop="showCalendar=!showCalendar"/> <calendar :show-calendar.sync=showCalendar v-if=showCalendar></calendar> </div> <div @click=submit($event)> <button type=button data-operation=save>保存问卷</button> <button type=button data-operation=publish>发布问卷</button> </div> </div> </div> '},39:function(t,e,n){var a,i;a=n(17),i=n(32),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=1.build.js.map