(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[3],{

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n  <ActionItem (tap)=\"onMenu()\" text=\"Menu\" ios.position=\"left\" android.position=\"actionBar\" *ngIf=\"currentTabIndex!=3 &&  currentTabIndex!=1\">\n  </ActionItem>\n  <ActionItem (tap)=\"showCreate=true\" text=\"Create\" ios.position=\"left\" android.position=\"actionBar\" *ngIf=\"currentTabIndex==1\">\n  </ActionItem>\n\n  <ActionItem (tap)=\"onPlay(0)\" ios.position=\"right\" text=\"Play\" *ngIf=\"currentTabIndex==2  && !USERINGAME\"></ActionItem>\n  <ActionItem (tap)=\"onShare()\" ios.position=\"right\" text=\"Grab Friends\" *ngIf=\"currentTabIndex==2  && USERINGAME && USERINGAME.grabs>0\"></ActionItem>\n  <ActionItem (tap)=\"onReload(1)\" ios.position=\"right\" text=\"Reload\" *ngIf=\"currentTabIndex==2  && USERINGAME && USERINGAME.grabs<1 && USERINGAME.slaps>0 && USERINGAME.sneaks>0\"></ActionItem>\n  <ActionItem (tap)=\"onReload(2)\" ios.position=\"right\" text=\"Reload\" *ngIf=\"currentTabIndex==2  && USERINGAME && USERINGAME.slaps<1 && USERINGAME.grabs>0 && USERINGAME.sneaks>0\"></ActionItem>\n    <ActionItem (tap)=\"onReload(3)\" ios.position=\"right\" text=\"Reload\" *ngIf=\"currentTabIndex==2  && USERINGAME && USERINGAME.sneaks<1 && USERINGAME.grabs>0 && USERINGAME.slaps>0\"></ActionItem>\n\n  <ActionItem (tap)=\"onEdit()\" ios.position=\"right\" text=\"Edit\" *ngIf=\"currentTabIndex==3 && user\"></ActionItem>\n  <ActionItem (tap)=\"onType('local')\" ios.position=\"right\" text=\"Local Games\" *ngIf=\"currentTabIndex==1 && $gType=='global'\"></ActionItem>\n  <ActionItem (tap)=\"onType('global')\" ios.position=\"right\" text=\"Global Games\" *ngIf=\"currentTabIndex==1 && $gType=='local'\"></ActionItem>\n</ActionBar>\n\n<GridLayout>\n  <GridLayout>\n    <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n      <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n        <ScrollView orientation=\"vertical\">\n          <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\" *ngIf=\"!DUSER\">\n            <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"lightgray\">\n\n              <Label text=\"Wallet\" class=\"h1 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"1\">\n\n              <Label text=\"login to view your wallet\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n          </GridLayout>\n\n          <GridLayout rows=\"*,*,*,*,*,*,*,*,*\" columns=\"*\" *ngIf=\"DUSER\">\n\n            <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"lightgray\">\n\n              <Label text=\"Wallet\" class=\"h1 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\" verticalAlignment=\"middle\">\n\n              <Label text=\"Tools\" class=\"h3 text-center p-t-20 p-b-20 textBold,\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"2\" class=\"p-t-20 p-b-20\" *ngIf=\"!showBuyTools\">\n\n              <Label text=\"Grabs: {{DUSER.wallet[0].tools[0].grabs}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"Slaps: {{DUSER.wallet[0].tools[0].slaps}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"Sneaks: {{DUSER.wallet[0].tools[0].sneaks}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n              <Button text=\"Buy Tools\" (tap)=\"showBuyTools=true\" class=\"-primary -rounded-lg\"></Button>\n\n            </StackLayout>\n\n            <StackLayout class=\"form\" *ngIf=\"showBuyTools\" row=\"2\">\n\n              <GridLayout rows=\"*,*,*,*,*\" columns=\"*\">\n                <StackLayout class=\"input-field\" row=\"0\">\n\n                  <Label text=\"Buy slaps, grabs & sneaks @ $0.10 each\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n                </StackLayout>\n\n                <StackLayout class=\"input-field\" row=\"1\">\n                  <Label row=\"1\" col=\"0\" text=\"Grabs\" horizontalAlignment=\"left\" class=\"label\" ></Label>\n\n                  <TextField class=\"input\" hint=\"How Many Grabs\" [(ngModel)]=\"buyGrabs\" keyboardType=\"number\" autocorrect=\"false\" maxLength=\"2\" autocapitalizationType=\"none\"></TextField>\n                </StackLayout>\n\n                <StackLayout class=\"input-field\" row=\"2\">\n                  <Label row=\"1\" col=\"0\" text=\"Slaps\" horizontalAlignment=\"left\" class=\"label\" ></Label>\n\n                  <TextField class=\"input\" hint=\"How Many Slaps\" [(ngModel)]=\"buySlaps\" keyboardType=\"number\" autocorrect=\"false\" maxLength=\"2\" autocapitalizationType=\"none\"></TextField>\n                </StackLayout>\n\n                <StackLayout class=\"input-field\" row=\"3\">\n                  <Label row=\"1\" col=\"0\" text=\"Sneaks\" horizontalAlignment=\"left\" class=\"label\" ></Label>\n\n                  <TextField class=\"input\" hint=\"How Many Sneaks\" [(ngModel)]=\"buySneaks\" keyboardType=\"number\" autocorrect=\"false\" maxLength=\"2\" autocapitalizationType=\"none\"></TextField>\n                </StackLayout>\n\n                <StackLayout orientation=\"vertical\" row=\"4\" backgroundColor=\"#F1F1F1\">\n\n                  <Label text=\"total USD: ${{(buySlaps*.10) + (buyGrabs*.10) + (buySneaks*.10) || 0 | number : '1.2-2'}}\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n                  <Label text=\"total BTC: {{((buySlaps*.10) + (buyGrabs*.10) + (buySneaks*.10))/btc_value || 0 | number : '1.4-4'}}\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n                  <Label text=\"total OWO: {{((buySlaps*.10) + (buyGrabs*.10) + (buySneaks*.10))/owo_value || 0 | number : '1.8-8'}}\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n                  <Label text=\"1 btc = ${{btc_value}}\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n\n                  <Label text=\"Most games offer you free slaps, grabs and sneaks to play with\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n                  <Label text=\"Buy more tools if needed\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"21\"></Label>\n\n                </StackLayout>\n              </GridLayout>\n              <Button text=\"Pay\" (tap)=\"onBuyTools()\" class=\"-primary -rounded-lg\"></Button>\n              <Button text=\"close\" (tap)=\"showBuyTools =false\"></Button>\n\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"3\" backgroundColor=\"#F1F1F1\" verticalAlignment=\"middle\">\n\n              <Label text=\"Bitcoin\" class=\"h3 text-center p-t-20 p-b-20 textBold\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"4\" class=\"p-t-20 p-b-20\">\n              <GridLayout rows=\"*,*,*\" columns=\"*,*\">\n                <Label row=\"0\" colSpan=\"2\" text=\"balance: {{DUSER.wallet[0].btc[0].btc_balance}}\" class=\"h3 text-center \"></Label>\n                <Label row=\"1\" colSpan=\"2\" text=\"{{DUSER.wallet[0].btc[0].btc_address}}\" class=\"h3 text-center \"></Label>\n                <Button row=\"2\" column=\"0\" text=\"copy\" (tap)=\"onCopy(DUSER.wallet[0].btc[0].btc_address)\" class=\"-primary -rounded-lg\" ></Button>\n                <Button row=\"2\" column=\"1\" text=\"withdraw\" (tap)=\"onWithdraw('1')\" class=\"-primary -rounded-lg\"></Button>\n\n              </GridLayout>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"5\" backgroundColor=\"#F1F1F1\" verticalAlignment=\"middle\" style=\"margin-bottom:60px\">\n\n              <Label text=\"BTC WITHDRAW ADDRESS\" class=\"h3 text-center p-t-20 p-b-20 textBold\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"6\" verticalAlignment=\"middle\" style=\"margin-bottom:100px\">\n\n              <Label text=\"{{DUSER.wallet[0].btc[0].pay_address ||  'N/A'}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"></Label>\n              <Button text=\"Edit\" (tap)=\"onPayAddress()\" class=\"-primary -rounded-lg\"></Button>\n\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"7\" backgroundColor=\"#F1F1F1\" verticalAlignment=\"middle\" style=\"margin-bottom:60px\">\n\n              <Label text=\"OWO\" class=\"h3 text-center p-t-20 p-b-20 textBold\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"8\" verticalAlignment=\"middle\" style=\"margin-bottom:600px\">\n              <GridLayout rows=\"*,*,*\" columns=\"*,*\">\n\n              <Label row=\"0\" colSpan=\"2\" text=\"balance: {{DUSER.wallet[0].owo[0].owo_balance}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"></Label>\n              <Label row=\"1\" colSpan=\"2\" text=\"{{DUSER.wallet[0].owo[0].owo_address}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"></Label>\n              <Button row=\"2\" col=\"0\" text=\"copy\" (tap)=\"onCopy($event)\" class=\"-primary -rounded-lg\"></Button>\n              <Button row=\"2\" column=\"1\" text=\"withdraw\" (tap)=\"onWithdraw('2')\" class=\"-primary -rounded-lg\"></Button>\n\n              </GridLayout>\n            </StackLayout>\n\n\n          </GridLayout>\n        </ScrollView>\n\n      </TabContentItem>\n\n      <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n        <ScrollView orientation=\"vertical\">\n          <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\" *ngIf=\"showCreate\">\n            <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n              <Label text=\"Create A Grabbit Game\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n\n            <StackLayout class=\"p-20\" row=\"1\">\n              <Card:CardView class=\"cardStyle\">\n                <StackLayout class=\"cardContent\">\n                  <Label text=\"Create local grabbit games for coupons\" class=\"m-b-10 h3\" />\n                  <Label text=\"to your business\" class=\"m-b-10 h3\" />\n                  <Image src=\"https://cdn0.iconfinder.com/data/icons/sale-12/256/sale_coupons-512.png\" (tap)=\"onCreate('coupon')\" />\n                  <Button text=\"create\" (tap)=\"onCreate('coupon')\" class=\"-primary -rounded-lg\"></Button>\n\n                </StackLayout>\n              </Card:CardView>\n            </StackLayout>\n\n            <StackLayout class=\"p-20\" row=\"2\">\n              <Card:CardView class=\"cardStyle\">\n                <StackLayout class=\"cardContent\">\n                  <Label text=\"Create grabbit games for bitcoin\" class=\"m-b-10 h3\" />\n                  <Label text=\"make a profit\" class=\"m-b-10 h3\" />\n                  <Image src=\"https://www.clipartwiki.com/clipimg/detail/83-835546_bitcoin-currency-black-orange-sign-free-photo-bitcoin.png\" (tap)=\"onCreate('bitcoin')\" />\n                  <Button text=\"create\" (tap)=\"onCreate('bitcoin')\" class=\"-primary -rounded-lg\"></Button>\n\n                </StackLayout>\n              </Card:CardView>\n            </StackLayout>\n            <StackLayout class=\"p-20\" row=\"3\"  style=\"margin-bottom:399px\">\n                  <Button text=\"close\" (tap)=\"showCreate=false\" class=\"-primary -rounded-lg\"></Button>\n            </StackLayout>\n\n          </GridLayout>\n          <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\" *ngIf=\"!showCreate\">\n            <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n              <Label text=\"Local Games\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"$gType=='local'\"></Label>\n              <Label text=\"Global Games\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"$gType=='global'\"></Label>\n            </StackLayout>\n\n            <StackLayout row=\"1\" *ngIf=\"$gType=='global' && GLOBALGAMES && GLOBALGAMES.length>0\">\n              <CardView *ngFor=\"let data of GLOBALGAMES\" (tap)=\"setGameId(data.game)\">\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\" *ngIf=\"data.user_id!=user_id\">\n                  <GridLayout rows=\"*,*\" columns=\"*\">\n                    <Label row=\"0\" col=\"0\" [text]=\"data.details.title\" class=\"h4 text-center\"></Label>\n                    <Label row=\"1\" col=\"0\" text=\"{{data.details.playersReady}}/{{data.details.playersMax}} players\" class=\"h4 text-center\"></Label>\n\n                  </GridLayout>\n                </StackLayout>\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\" backgroundColor=\"#F1F1F1\" *ngIf=\"data.user_id==user_id\">\n                  <GridLayout rows=\"*,*\" columns=\"*\">\n                    <Label row=\"0\" col=\"0\" [text]=\"data.details.title\" class=\"h4 text-center\"></Label>\n                    <Label row=\"1\" col=\"0\" text=\"{{data.details.playersReady}}/{{data.details.playersMax}} players\" class=\"h4 text-center\"></Label>\n\n                  </GridLayout>\n                </StackLayout>\n\n              </CardView>\n\n            </StackLayout>\n\n            <StackLayout row=\"1\" *ngIf=\"$gType=='global' && GLOBALGAMES && GLOBALGAMES.length<1\">\n              <Label text=\"no games available\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n            </StackLayout>\n\n            <StackLayout row=\"1\" *ngIf=\"$gType=='local' && LOCALGAMES && LOCALGAMES.length>0\">\n              <CardView *ngFor=\"let data of LOCALGAMES\" (tap)=\"setGameId(data.game)\">\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\" *ngIf=\"data.user_id!=user_id\">\n                  <GridLayout rows=\"*,*,*\" columns=\"*\">\n                    <Label row=\"0\" col=\"0\" [text]=\"PARSE(data.details).title\" class=\"h4 text-center\"></Label>\n                    <Label row=\"1\" col=\"0\" [text]=\"PARSE(data.details).prizeType\" class=\"h4 text-center\"></Label>\n                    <Label row=\"2\" col=\"0\" text=\"{{PARSE(data.details).playersReady}}/{{PARSE(data.details).playersMax}} players\" class=\"h4 text-center\"></Label>\n\n                  </GridLayout>\n                </StackLayout>\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\" backgroundColor=\"#F1F1F1\" *ngIf=\"data.user_id==user_id\">\n                  <GridLayout rows=\"*,*,*\" columns=\"*\">\n                    <Label row=\"0\" col=\"0\" [text]=\"PARSE(data.details).title\" class=\"h4 text-center\"></Label>\n                    <Label row=\"1\" col=\"0\" [text]=\"PARSE(data.details).prizeType\" class=\"h4 text-center\"></Label>\n                    <Label row=\"2\" col=\"0\" text=\"{{PARSE(data.details).playersReady}}/{{PARSE(data.details).playersMax}} players\" class=\"h4 text-center\"></Label>\n\n                  </GridLayout>\n                </StackLayout>\n\n              </CardView>\n\n            </StackLayout>\n\n            <StackLayout row=\"1\" *ngIf=\"$gType=='local' && (LOCALGAMES && LOCALGAMES.length<1)\">\n              <Label text=\"no local games available, you are free  to create one\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n            </StackLayout>\n\n          </GridLayout>\n        </ScrollView>\n      </TabContentItem>\n\n      <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n        <ScrollView orientation=\"vertical\">\n          <GridLayout rows=\"*\" columns=\"*\" *ngIf=\"!Dgame\">\n            <StackLayout orientation=\"vertical\" verticalAlignment=\"middle\" row=\"0\">\n              <Label text=\"loading game...\" class=\"h4 text-center p-t-20\"></Label>\n            </StackLayout>\n          </GridLayout>\n          <GridLayout rows=\"*,*,*,*,*\" columns=\"*\" *ngIf=\"Dgame\">\n\n            <StackLayout orientation=\"vertical\" row=\"0\" *ngIf=\"Dgame && liveGame<1\">\n              <Label text=\"prize\" class=\"h5 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started<1\"></Label>\n              <Label text=\"prize grabbed by\" class=\"h5 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started>0\"></Label>\n              <Label [text]=\"title\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started<1\"></Label>\n              <Label text=\"{{Dgame.winner.name || 'no one yet'}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started>0\"></Label>\n              <Image *ngIf=\"title\" horizontalAlignment=\"stretch\" [src]=\"image\" style=\"width:33%; height:auto;margin-top:33px;border-width: 4; border-color: #000; border-radius: 500;\"></Image>\n              <Label text=\"players in game\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"{{playersReady}}/{{playersMax}}\" class=\"h1 text-center\" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"{{playersMin}} players to start game\" class=\"h4 text-center\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"0\" *ngIf=\"liveGame>0 && Dgame\">\n\n              <Label text=\"prize\" class=\"h5 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep<1\"></Label>\n              <Label text=\"prize grabbed by\" class=\"h5 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0\"></Label>\n              <Label [text]=\"title\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started<1\"></Label>\n              <Label [text]=\"Dgame.winner.name  || 'no one yet'\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.started>0\"></Label>\n              <Image *ngIf=\"title && Dgame.details.started<1\" horizontalAlignment=\"stretch\" [src]=\"image\" style=\"width:33%; height:auto;margin-top:33px;border-width: 1; border-color: #333; border-radius: 500;\"></Image>\n              <Image *ngIf=\"title && Dgame.details.started>0\" horizontalAlignment=\"stretch\" [src]=\"Dgame.winner.avatar || '~/assets/imgs/avatars/blank.jpg'\" style=\"width:33%; height:auto;margin-top:33px;border-width: 4; border-color: #000; border-radius: 500;\"></Image>\n              <Label text=\"game starts in\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && Dgame.details.started<1\"></Label>\n              <Label text=\"game ends in\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && Dgame.details.started>0 && Dgame.details.completed<1\"></Label>\n              <Label text=\"game over\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && Dgame.details.started>0 && Dgame.details.completed>0\"></Label>\n              <Label text=\"{{gameTime}}\" class=\"h1 text-center p-b-20\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n\n            <StackLayout orientation=\"horizontal\" class=\"p-t-20 text-center p-b-20\" row=\"1\" backgroundColor=\"#F1F1F1\" verticalAlignment=\"middle\">\n              <GridLayout rows=\"*,*,*\" columns=\"*,*,*\" *ngIf=\"Dgame\">\n                <Label row=\"0\" column=\"0\" text=\"{{Dgame.details.freeSlaps}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep<1\"></Label>\n                <Label row=\"0\" column=\"1\" text=\"{{Dgame.details.freeGrabs}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"  *ngIf=\"Dgame.details.startPrep<1\"></Label>\n                <Label row=\"0\" column=\"2\" text=\"{{Dgame.details.freeSneaks}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep<1\"></Label>\n\n                <Label row=\"0\" column=\"0\" text=\"{{USERINGAME.slaps}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && USERINGAME\"></Label>\n                <Label row=\"0\" column=\"1\" text=\"{{USERINGAME.grabs}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"  *ngIf=\"Dgame.details.startPrep>0 && USERINGAME\"></Label>\n                <Label row=\"0\" column=\"2\" text=\"{{USERINGAME.sneaks}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && USERINGAME\"></Label>\n\n                <Label row=\"0\" column=\"0\" text=\"{{Dgame.details.freeSlaps}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && !USERINGAME\"></Label>\n                <Label row=\"0\" column=\"1\" text=\"{{Dgame.details.freeGrabs}}\" class=\"h3 text-center \" horizontalAlignment=\"stretch\"  *ngIf=\"Dgame.details.startPrep>0 && !USERINGAME\"></Label>\n                <Label row=\"0\" column=\"2\" text=\"{{Dgame.details.freeSneaks}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.startPrep>0 && !USERINGAME\"></Label>\n\n                <Button row=\"1\" column=\"0\" text=\"Slap\" width=\"100\" class=\"slap\" (tap)=\"onSlap()\"></Button>\n                <Button row=\"1\" column=\"1\" text=\"Grab\" width=\"100\" class=\"grab\" (tap)=\"onGrab()\"></Button>\n                <Button row=\"1\" column=\"2\" text=\"Sneak\" width=\"100\" class=\"sneak\" (tap)=\"onSneak()\"></Button>\n                <Label row=\"3\" column=\"0\" colSpan=\"3\" text=\"{{message}}\" class=\"h4 text-center\" horizontalAlignment=\"stretch\"></Label>\n\n              </GridLayout>\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"2\" verticalAlignment=\"middle\">\n\n              <CardView class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\" *ngIf=\"Dgame\">\n                <GridLayout rows=\"*,*,*,*,*,*\" columns=\"*\">\n                  <Label text=\"game info\" class=\"createdBy text-center h4\" row=\"0\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\"></Label>\n                  <Label text=\"{{Dgame.details.info}}\" class=\"createdBy text-center  h3\" row=\"1\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\"></Label>\n                  <Label text=\"Free Grabs: {{Dgame.details.freeGrabs}}, Free Slaps: {{Dgame.details.freeSlaps}}, Free Sneaks: {{Dgame.details.freeSneaks}} \" class=\"createdBy text-center h4\" row=\"2\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\"></Label>\n                  <Label text=\"Insert: {{Dgame.details.toPlayGrabs | number : '1.0-0'}} Grabs\" class=\"text-center h3 textBold\" row=\"3\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.toPlayGrabs>0\"></Label>\n                  <Label text=\"Proof Of Prize  \" class=\"text-center h5\" row=\"4\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.prizeType=='btc'\"></Label>\n                  <Label text=\"{{Dgame.details.btc_address}}\" class=\"text-center h4 textBold\" row=\"5\" col=\"0\" textWrap=\"true\" horizontalAlignment=\"stretch\" *ngIf=\"Dgame.details.prizeType=='btc'\" (tap)=\"onProve(Dgame.details.btc_address)\"></Label>\n\n                </GridLayout>\n\n              </CardView>\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"3\" backgroundColor=\"#F1F1F1\" class=\"p-t-20\" verticalAlignment=\"middle\" *ngIf=\"PLAYERS &&  PLAYERS.length>0\">\n\n              <Label text=\"Players\" class=\"h2 text-center\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"4\" *ngIf=\"PLAYERS\" style=\"height:{{playersHeight}}px\">\n\n              <CardView *ngFor=\"let data of PLAYERS\">\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\">\n                  <Image [src]=\"data.avatar\" style=\"width:21%; height:auto;\"></Image>\n                  <Label [text]=\"data.name\" class=\"h2 text-center  p-l-20\"></Label>\n\n                </StackLayout>\n\n              </CardView>\n\n            </StackLayout>\n\n          </GridLayout>\n        </ScrollView>\n\n\n      </TabContentItem>\n\n      <TabContentItem [backgroundColor]=\"tabList[3].backgroundColor\">\n\n        <ScrollView orientation=\"vertical\">\n          <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n            <StackLayout orientation=\"vertical\" row=\"0\" *ngIf=\"DUSER\">\n\n              <Image *ngIf=\"name\" horizontalAlignment=\"stretch\" [src]=\"avatar\" style=\"width:44%; height:auto;margin-top:33px;\" (tap)=\"onEdit()\"></Image>\n              <Label [text]=\"name\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n              <Label [text]=\"email\" class=\"h2 text-center\" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"games played: {{gamesPlayed}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"wins: {{wins}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n              <Label text=\"practice: {{practiceCount}}\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"lightgray\">\n\n              <Label text=\"select your avatar\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"DUSER\"></Label>\n              <Label text=\"avatar options\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" *ngIf=\"!DUSER\"></Label>\n            </StackLayout>\n\n            <StackLayout orientation=\"horizontal\" class=\"p-t-20\" row=\"2\" backgroundColor=\"#F1F1F1\">\n              <CardView class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\">\n                <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*\" columns=\"*,*,*,*\">\n                  <Image src=\"~/assets/imgs/avatars/abra.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"0\" (tap)=\"onAvatar('abra.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_1.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"0\" (tap)=\"onAvatar('alien_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_2.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"0\" (tap)=\"onAvatar('alien_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_3.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"0\" (tap)=\"onAvatar('alien_3.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/alien_4.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"1\" (tap)=\"onAvatar('alien_4.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_5.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"1\" (tap)=\"onAvatar('alien_5.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_6.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"1\" (tap)=\"onAvatar('alien_6.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien_7.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"1\" (tap)=\"onAvatar('alien_7.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/alien_8.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"2\" (tap)=\"onAvatar('alien_8.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/alien.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"2\" (tap)=\"onAvatar('alien.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_2.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"2\" (tap)=\"onAvatar('angry_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_3.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"2\" (tap)=\"onAvatar('angry_3.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/angry_4.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"3\" (tap)=\"onAvatar('angry_4.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_6.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"3\" (tap)=\"onAvatar('angry_6.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_7.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"3\" (tap)=\"onAvatar('angry_7.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_8.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"3\" (tap)=\"onAvatar('angry_8.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/angry_9.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"4\" (tap)=\"onAvatar('angry_9.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_10.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"4\" (tap)=\"onAvatar('angry_10.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_11.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"4\" (tap)=\"onAvatar('angry_11.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_12.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"4\" (tap)=\"onAvatar('angry_12.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/angry_13.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"5\" (tap)=\"onAvatar('angry_13.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry_14.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"5\" (tap)=\"onAvatar('angry_14.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/angry.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"5\" (tap)=\"onAvatar('angry.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/aqualung.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"5\" (tap)=\"onAvatar('aqualung.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/arab_1.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"6\" (tap)=\"onAvatar('arab_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/arab.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"6\" (tap)=\"onAvatar('arab.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/astronaut.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"6\" (tap)=\"onAvatar('astronaut.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/avatar.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"6\" (tap)=\"onAvatar('avatar.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/baby.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"7\" (tap)=\"onAvatar('baby.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/boy_1.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"7\" (tap)=\"onAvatar('boy_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/boy_2.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"7\" (tap)=\"onAvatar('boy_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/boy_4.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"7\" (tap)=\"onAvatar('boy_4.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/boy_5.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"8\" (tap)=\"onAvatar('boy_5.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/boy.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"8\" (tap)=\"onAvatar('boy.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/brain.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"8\" (tap)=\"onAvatar('brain.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/caterpie.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"8\" (tap)=\"onAvatar('caterpie.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/charmander.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"9\" (tap)=\"onAvatar('charmander.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/clown.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"9\" (tap)=\"onAvatar('clown.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/customer-service_1.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"9\" (tap)=\"onAvatar('customer-service_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/customer-service.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"9\" (tap)=\"onAvatar('customer-service.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/death.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"10\" (tap)=\"onAvatar('death.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/eevee.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"10\" (tap)=\"onAvatar('eevee.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/einstein.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"10\" (tap)=\"onAvatar('einstein.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/facial-treatment.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"10\" (tap)=\"onAvatar('facial-treatment.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/heisenberg.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"11\" (tap)=\"onAvatar('heisenberg.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/incubator.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"11\" (tap)=\"onAvatar('incubator.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/jesus_1.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"11\" (tap)=\"onAvatar('jesus_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/jesus.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"11\" (tap)=\"onAvatar('jesus.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/finger.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"12\" (tap)=\"onAvatar('finger.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/firefighter.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"12\" (tap)=\"onAvatar('firefighter.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/geek_2.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"12\" (tap)=\"onAvatar('geek_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/geek.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"12\" (tap)=\"onAvatar('geek.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/girl_1.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"13\" (tap)=\"onAvatar('girl_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/girl_2.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"13\" (tap)=\"onAvatar('girl_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/girl_3.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"13\" (tap)=\"onAvatar('girl_3.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/girl_4.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"13\" (tap)=\"onAvatar('girl_4.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/girl_6.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"14\" (tap)=\"onAvatar('girl_6.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/girl_8.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"14\" (tap)=\"onAvatar('girl_8.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/girl.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"14\" (tap)=\"onAvatar('girl.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/god.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"14\" (tap)=\"onAvatar('god.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/hacker.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"15\" (tap)=\"onAvatar('hacker.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/happy_2.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"15\" (tap)=\"onAvatar('happy_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/happy.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"15\" (tap)=\"onAvatar('happy.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/heisenberg_1.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"15\" (tap)=\"onAvatar('heisenberg_1.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/jigglypuff.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"16\" (tap)=\"onAvatar('jigglypuff.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/lock.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"16\" (tap)=\"onAvatar('lock.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/love-and-romance.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"16\" (tap)=\"onAvatar('love-and-romance.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/man.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"16\" (tap)=\"onAvatar('man.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/monster.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"17\" (tap)=\"onAvatar('monster.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/motorcyclist.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"17\" (tap)=\"onAvatar('motorcyclist.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/oculus-rift.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"17\" (tap)=\"onAvatar('oculus-rift.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/pikachu.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"17\" (tap)=\"onAvatar('pikachu.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/pirate.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"18\" (tap)=\"onAvatar('pirate.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/problem.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"18\" (tap)=\"onAvatar('problem.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/psyduck.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"18\" (tap)=\"onAvatar('psyduck.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/rapper_2.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"18\" (tap)=\"onAvatar('rapper_2.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/rapper.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"19\" (tap)=\"onAvatar('rapper.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_1.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"19\" (tap)=\"onAvatar('robot_1.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_2.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"19\" (tap)=\"onAvatar('robot_2.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_3.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"19\" (tap)=\"onAvatar('robot_3.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/robot_4.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"20\" (tap)=\"onAvatar('robot_4.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_5.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"20\" (tap)=\"onAvatar('robot_5.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_6.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"20\" (tap)=\"onAvatar('robot_6.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/robot_7.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"20\" (tap)=\"onAvatar('robot_7.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/robot_9.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"21\" (tap)=\"onAvatar('robot_9.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/serial-killer.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"21\" (tap)=\"onAvatar('serial-killer.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/smoked.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"21\" (tap)=\"onAvatar('smoked.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/soldier_1.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"21\" (tap)=\"onAvatar('soldier_1.png')\"></Image>\n\n                  <Image src=\"~/assets/imgs/avatars/squirtle.png\" margin=\"12\" class=\"avatars\" col=\"0\" row=\"22\" (tap)=\"onAvatar('squirtle.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/thief.png\" margin=\"12\" class=\"avatars\" col=\"1\" row=\"22\" (tap)=\"onAvatar('thief.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/user.png\" margin=\"12\" class=\"avatars\" col=\"2\" row=\"22\" (tap)=\"onAvatar('user.png')\"></Image>\n                  <Image src=\"~/assets/imgs/avatars/welder.png\" margin=\"12\" class=\"avatars\" col=\"3\" row=\"22\" (tap)=\"onAvatar('welder.png')\"></Image>\n\n                </GridLayout>\n              </CardView>\n\n            </StackLayout>\n\n\n\n          </GridLayout>\n        </ScrollView>\n      </TabContentItem>\n\n      <TabContentItem [backgroundColor]=\"tabList[4].backgroundColor\">\n        <ScrollView>\n\n          <GridLayout rows=\"*,*,*\" columns=\"*\">\n            <StackLayout row=\"0\" backgroundColor=\"#F1F1F1\">\n\n              <Label text=\"Your Wins\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n              <Label text=\"redeem your wins within 72 hours to get perks\" class=\"h4 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"WINS &&  WINS.length>0 && showRedeem\">\n\n              <CardView *ngFor=\"let data of WINS\" (tap)=\"setGameId(data.game)\">\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\">\n                  <GridLayout rows=\"*,*,*\" columns=\"*\">\n                    <Label row=\"0\" col=\"0\" [text]=\"data.details.title\" class=\"h4 text-center\"></Label>\n                    <Label row=\"1\" col=\"0\" text=\"{{data.details.playersReady}}/{{data.details.playersMax}} players\" class=\"h4 text-center\"></Label>\n                    <Button row=\"2\" column=\"0\" text=\"redeem\" width=\"100\" (tap)=\"onRedeem(data.details.qr)\"  *ngIf=\"data.details.prizeType=='coupon' &&  data.winner.redeemed<1\"></Button>\n\n                  </GridLayout>\n                </StackLayout>\n\n              </CardView>\n\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"showRedeem\">\n\n              <CardView>\n                <StackLayout orientation=\"horizontal\" margin=\"12\" class=\"text-center\">\n                  <GridLayout rows=\"*,*,*\" columns=\"*\">\n\n                    <Label row=\"0\" col=\"0\" text=\"show this qr code to the  game host, when redeeming your win.\" class=\"h4 text-center\"></Label>\n                    <Image [src]=\"redeemQR\" margin=\"12\" col=\"0\" row=\"1\"></Image>\n                    <Button row=\"2\" column=\"0\" text=\"close\" width=\"100\" (tap)=\"showRedeem=false\" ></Button>\n\n                  </GridLayout>\n                </StackLayout>\n\n              </CardView>\n\n            </StackLayout>\n\n            <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"WINS &&  WINS.length<1\">\n              <Label text=\"No Wins Yet\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n\n\n            </StackLayout>\n          </GridLayout>\n        </ScrollView>\n\n      </TabContentItem>\n    </Tabs>\n  </GridLayout>\n\n  <!-- bottom tabs -->\n  <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *, *, *\">\n\n    <!-- base layer -->\n    <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n      <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n        <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\" [backgroundColor]=\"tabContainer.backgroundColor\" verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n        <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\" [backgroundColor]=\"tabContainer.backgroundColor\" verticalAlignment=\"bottom\"></GridLayout>\n        <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\" [backgroundColor]=\"tabContainer.backgroundColor\" verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n        <!-- focus circle -->\n        <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\" width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\" borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n          <GridLayout verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\" width=\"90\" [backgroundColor]=\"tabContainer.focusColor\" borderRadius=\"45\"></GridLayout>\n        </GridLayout>\n\n      </GridLayout>\n    </AbsoluteLayout>\n\n    <!-- tab contents -->\n    <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\" [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\" verticalAlignment=\"middle\">\n      <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\" horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\"></Label>\n    </GridLayout>\n\n    <!-- pan layer -->\n    <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\" verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\" width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n  </GridLayout>\n\n</GridLayout>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n.cardStyle {\n    background-color: #fff;\n    color: rgb(43, 43, 43);\n}\n\n.cardContent {\n    padding: 20;\n    font-weight: bold;\n    font-size: 30;\n}\n.list-item {\n    margin-bottom: 2;\n}\n\n.item-title {\n    background-color: rgba(0,0,0,0.4);\n    color: white;\n    vertical-align: bottom;\n    padding: 16;\n    font-size: 20;\n}\n\n.action-bar-label {\n    font-size: 22;\n    horizontal-align: center;\n    vertical-align: center;\n    color: white;\n}\n\n.action-bar-icon {\n    width: 20;\n    vertical-align: center;\n    margin: 12;\n}\n"

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ../node_modules/@nativescript/angular/common.js
var common = __webpack_require__(186);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js
var side_drawer_directives = __webpack_require__(531);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-listview/angular/listview-directives.js
var listview_directives = __webpack_require__(532);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-calendar/angular/calendar-directives.js
var calendar_directives = __webpack_require__(533);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-chart/angular/chart-directives.js
var chart_directives = __webpack_require__(534);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-dataform/angular/dataform-directives.js
var dataform_directives = __webpack_require__(535);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js
var autocomplete_directives = __webpack_require__(536);

// EXTERNAL MODULE: ../node_modules/nativescript-ui-gauge/angular/gauges-directives.js
var gauges_directives = __webpack_require__(537);

// EXTERNAL MODULE: ../node_modules/@nativescript/angular/forms/index.js
var angular_forms = __webpack_require__(293);

// EXTERNAL MODULE: ../node_modules/@nativescript/angular/router/index.js
var angular_router = __webpack_require__(38);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/ui/enums/enums.js
var enums = __webpack_require__(76);

// EXTERNAL MODULE: ../node_modules/nativescript-geolocation/geolocation.js
var geolocation = __webpack_require__(538);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/ui/dialogs/dialogs.js
var dialogs = __webpack_require__(28);

// EXTERNAL MODULE: ../node_modules/@nativescript/angular/element-registry.js
var element_registry = __webpack_require__(51);

// EXTERNAL MODULE: ../node_modules/@nstudio/nativescript-cardview/cardview.js
var cardview = __webpack_require__(539);

// EXTERNAL MODULE: ./services/game.ts
var game = __webpack_require__(73);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/platform/platform.js
var platform = __webpack_require__(23);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/ui/page/page.js
var page_page = __webpack_require__(77);

// EXTERNAL MODULE: ../node_modules/nativescript-clipboard/clipboard.js
var clipboard = __webpack_require__(541);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/timer/timer.js
var timer = __webpack_require__(156);

// EXTERNAL MODULE: ../node_modules/nativescript-social-share/social-share.js
var social_share = __webpack_require__(542);

// EXTERNAL MODULE: ../node_modules/@angular/common/fesm5/http.js
var fesm5_http = __webpack_require__(20);

// EXTERNAL MODULE: ../node_modules/@nativescript/core/utils/utils.js
var utils = __webpack_require__(21);

// CONCATENATED MODULE: ./home/home.component.ts



 // used to describe at what accuracy the location should be get



Object(element_registry["registerElement"])('CardView', function () { return cardview["CardView"]; });
Object(element_registry["registerElement"])("PullToRefresh", function () { return __webpack_require__(540).PullToRefresh; });

var localStorage = __webpack_require__(157);


// import { timer } from 'rxjs/observable/timer';







var home_component_HomeComponent = /** @class */ (function () {
    function HomeComponent(http, _game, zone, cd, router, page) {
        this.http = http;
        this._game = _game;
        this.zone = zone;
        this.cd = cd;
        this.router = router;
        this.page = page;
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = enums["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
        // Tab Contents and Properties
        this.tabContainer = {
            backgroundColor: '#F1F1F1',
            focusColor: '#F1F1F1'
        };
        this.tabList = [
            { text: String.fromCharCode(0xf555), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf46d), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf441), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf007), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf79c), backgroundColor: '#FFF', color: '#DC7905' }
        ];
        this.currentTabIndex = 2;
        this.defaultSelected = 2;
        this.locations = [];
        this.watchIds = [];
        this.buyGrabs = 0;
        this.buySlaps = 0;
        this.buySneaks = 0;
        this.math = Math;
        this.$game = _game;
        this.$gType = 'global';
        this.showBuyTools = false;
        this.showCreate = false;
        this.liveGame = 0;
        this.LOCALGAMES = [];
    }
    // --------------------------------------------------------------------
    // Hooks
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.initializeTabBar();
        this.geo();
        this.bGeo();
    };
    HomeComponent.prototype.geo = function () {
        var _this = this;
        this.zone.run(function () {
            // console.log("getting geo again this time  it  will work")
            geolocation["isEnabled"]().then(function (isEnabled) {
                if (!isEnabled) {
                    geolocation["enableLocationRequest"](true, true).then(function () {
                        console.log("User Enabled Location Service");
                    }, function (e) {
                        _this.pop(e.message, 'error');
                        console.log("Error: " + (e.message || e));
                    }).catch(function (ex) {
                        console.log("Unable to Enable Your Device Location", ex);
                    });
                }
                else {
                    // console.log("enabled")
                    _this.bGeo();
                    setTimeout(function () {
                        _this.startWatchingLocation();
                    }, 5000);
                }
            }, function (e) {
            });
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.bGeo = function () {
        var _this = this;
        this.zone.run(function () {
            console.log("bGeo  reached");
            geolocation["getCurrentLocation"]({
                desiredAccuracy: enums["Accuracy"].high,
                maximumAge: 5000,
                timeout: 10000,
                iosAllowsBackgroundLocationUpdates: true
            }).then(function (loc) {
                if (loc) {
                    _this.lat = loc.latitude;
                    _this.lng = loc.longitude;
                    localStorage.setString('lat', JSON.stringify(_this.lat));
                    localStorage.setString('lng', JSON.stringify(_this.lng));
                    _this.bGLOBALGAMES();
                    _this.bLOCALGAMES();
                    // console.log(loc)
                }
                else {
                    _this.bGLOBALGAMES();
                    // this.pop('unable to get your location, local games won\'t be available', 'errors')
                    // this.bGAMES()
                }
            }, function (e) {
                // this.pop('unable to get your location, local games won\'t be available', 'errors')
            });
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = geolocation["watchLocation"](function (location) {
            if (location) {
                _this.zone.run(function () {
                    localStorage.setString('lat', JSON.stringify(location.latitude));
                    localStorage.setString('lng', JSON.stringify(location.longitude));
                    _this.lat = JSON.stringify(location.latitude);
                    _this.lng = JSON.stringify(location.longitude);
                    // console.log(this.lat, this.lng)
                });
            }
        }, function (error) {
            //  console.dump(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    };
    // --------------------------------------------------------------------
    // get stored  info
    HomeComponent.prototype.gStorage = function () {
        // console.log("getting storage")
        this.token = localStorage.getString('token');
        this.name = localStorage.getString('name');
        this.user = localStorage.getString('user');
        this.lat = localStorage.getString('lat');
        this.lng = localStorage.getString('lng');
        // this.device = 'afkehofahoufhep'
        this.device = platform["device"].uuid;
        this.deviceManufacturer = platform["device"].manufacturer;
        this.deviceModel = platform["device"].model;
        this.country = platform["device"].region;
        this.isAndroid = platform["isAndroid"];
        this.isIOS = platform["isIOS"];
        // console.log(this.country)
        // Telephony().then((resolved: any) => {
        //
        //   this.countryCode = resolved.countryCode
        //   // this.pop(this.countryCode, 'success')
        // }).catch((error) => {
        //   console.log(error)
        // })
        if (platform["isAndroid"]) {
            // console.log("android")
            // this.device = "android495775qafef4bi9"
        }
        else {
            // console.log("ios")
            //
            // this.device = "anfeoboeuab30r3u"
        }
        if (this.user) {
            console.log("got user id stored");
            this.gUSER();
            this.bGLOBALGAMES();
        }
        else {
            console.log("no users");
            this.bGLOBALGAMES();
        }
        if (this.lat && this.lng) {
            // console.log("got  lat")
            this.bLOCALGAMES();
        }
        else {
            // console.log("no lat")
            // this.pop("getting your location", 'success')
            this.geo();
            // this.bGeo()
        }
    };
    // --------------------------------------------------------------------
    // get user
    HomeComponent.prototype.gUSER = function () {
        var _this = this;
        console.log("getting the user");
        this.$game.gUSER(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    var USER = jordi.payload[0];
                    _this.BIZ = jordi.payload[1];
                    _this.WINS = jordi.payload[2];
                    _this.DUSER = USER;
                    // console.log(USER)
                    _this.name = USER.profile.name || 'no user name set';
                    _this.avatar = USER.profile.avatar || '~/assets/imgs/avatars/alien_02.png';
                    _this.wins = USER.profile.wins || 0;
                    _this.practiceCount = USER.profile.practice || 0;
                    _this.gamesPlayed = USER.profile.plays || 0;
                    _this.email = USER.email || 'no email set';
                    _this.admin = USER.profile.admin;
                    _this.btc_value = jordi.btc_value;
                    _this.owo_value = jordi.owoValue;
                    _this.btc_fee_usd = jordi.btc_fee_usd;
                    _this.cd.detectChanges();
                    // console.log(this.owo_value)
                });
            }
            else {
                console.log("no user");
                _this.zone.run(function () {
                    _this.name = 'n/a';
                    _this.avatar = '~/assets/imgs/avatars/alien_02.png';
                    _this.wins = '0';
                    _this.practiceCount = '0';
                    _this.cd.detectChanges();
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    // --------------------------------------------------------------------
    // set avataqr
    HomeComponent.prototype.onAvatar = function (avatar) {
        var _this = this;
        if (!this.user) {
            this.pop("log in to set your avatar", "error");
        }
        else {
            this.$game.onAvatar(this.token, this.user, avatar)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.zone.run(function () {
                        _this.pop(jordi.message, 'success');
                        _this.gUSER();
                        _this.cd.detectChanges();
                    });
                }
                else {
                    _this.pop(jordi.message, 'error');
                }
            });
        }
    };
    HomeComponent.prototype.onEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                dialogs["action"]({
                    message: "Edit Profile",
                    cancelButtonText: "cancel",
                    actions: ["edit user name", "edit email"]
                }).then(function (result) {
                    // console.log("Dialog result: " + result);
                    if (result == "edit user name") {
                        dialogs["prompt"]({
                            title: "Edit User Name",
                            message: "choose a suitable user name",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: dialogs["inputType"].text
                        }).then(function (r) {
                            if (r.result) {
                                _this.onEditComplete(r.text, 1);
                            }
                        });
                    }
                    else if (result == "edit email") {
                        //Do action2
                        dialogs["prompt"]({
                            title: "Edit Email",
                            message: "a confirmation code will be sent to your email address",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: dialogs["inputType"].text
                        }).then(function (r) {
                            if (r.result) {
                                _this.onEditComplete(r.text, 2);
                            }
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.onBuyTools = function () {
        var _this = this;
        if (this.buySlaps < 1 && this.buyGrabs < 1 && this.buySneaks < 1) {
            this.pop("must buy 1 or more tools", 'error');
        }
        else {
            var ACTIONS = ["pay with bitcoin", "pay with owo"];
            var payType_1;
            dialogs["action"]({
                message: "Payment Options",
                cancelButtonText: "cancel",
                actions: ACTIONS
            }).then(function (result) {
                if (result == 'pay with  bitcoin') {
                    payType_1 = 1;
                }
                else if (result == 'pay with  owo') {
                    payType_1 = 2;
                }
                _this.$game.onPay(_this.token, _this.user, _this.buyGrabs, _this.buySlaps, _this.buySneaks, payType_1)
                    .subscribe(function (jordi) {
                    if (jordi.success) {
                        _this.zone.run(function () {
                            _this.pop(jordi.message, 'success');
                            _this.gUSER();
                            _this.cd.detectChanges();
                        });
                    }
                    else {
                        _this.pop(jordi.message, 'error');
                    }
                });
            });
        }
    };
    HomeComponent.prototype.onCreate = function (type) {
        var _this = this;
        console.log(type);
        setTimeout(function () {
            _this.router.navigate(['/create/' + type], {
                animated: true,
                clearHistory: false
            });
        }, 300);
    };
    HomeComponent.prototype.onMenu = function () {
        var _this = this;
        var ACTIONS;
        if (this.user) {
            if (this.admin > 0) {
                ACTIONS = ["admin", "chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"];
            }
            else {
                if (this.BIZ && this.BIZ.length > 0) {
                    ACTIONS = ["business profile", "chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"];
                }
                else {
                    ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"];
                }
            }
        }
        else {
            ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy"];
        }
        dialogs["action"]({
            message: "Menu",
            cancelButtonText: "cancel",
            actions: ACTIONS
        }).then(function (result) {
            if (result == 'logout') {
                localStorage.remove("user");
                localStorage.remove('token');
                localStorage.remove('name');
                setTimeout(function () {
                    _this.pop("you are logged not out", 'success');
                });
            }
            else if (result == 'about us') {
                setTimeout(function () {
                    _this.router.navigate(['/about'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (result == 'chat') {
                _this.pop("chat  is coming soon", 'error');
            }
            else if (result == 'support') {
                utils["openUrl"]("https://grabbit.cheap/#/support");
                // setTimeout(() => {
                //
                //   this.router.navigate(['/support'], {
                //     animated: true,
                //     clearHistory: false
                //   })
                // }, 300);
            }
            else if (result == 'privacy policy') {
                setTimeout(function () {
                    utils["openUrl"]("https://grabbit.cheap/#/privacy");
                    // this.router.navigate(['/legals/privacy'], {
                    //   animated: true,
                    //   clearHistory: false
                    // })
                }, 300);
            }
            else if (result == 'user agreement') {
                utils["openUrl"]("https://grabbit.cheap/#/agreement");
                // setTimeout(() => {
                //
                //   this.router.navigate(['/legals/agreement'], {
                //     animated: true,
                //     clearHistory: false
                //   })
                // }, 300);
            }
            else if (result == 'how to play') {
                _this.pop("slap before you grab, sneak after you grab. Don't let  the timer hit 0, if you are not the one who grabbed the prize. If you get slapped, grab again and again and again. Send us your video explaining how to play and you could win $1,000 in bitcoin videos must be in by 12/30/2019. send youtube link to cs@grabbit.cheap, subject how to play video", 'how to play');
            }
            else if (result == 'business profile') {
                setTimeout(function () {
                    _this.router.navigate(['/profile-business'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
        });
    };
    HomeComponent.prototype.onEditComplete = function (text, type) {
        var _this = this;
        this.$game.onEdit(this.token, this.user, text, type)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.pop(jordi.message, 'success');
                    _this.gUSER();
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.pop(jordi.message, 'error');
            }
        });
    };
    // --------------------------------------------------------------------
    // bring global game
    HomeComponent.prototype.bGLOBALGAMES = function () {
        var _this = this;
        console.log('getting  global games again');
        this.$game.bGLOBALGAMES()
            .subscribe(function (jordi) {
            if (jordi.success) {
                // console.log(jordi.payload)
                _this.zone.run(function () {
                    _this.DGAMES = jordi.payload[0];
                    _this.GLOBALGAMES = _this.DGAMES;
                    _this.Dgame = _this.DGAMES[Math.floor(Math.random() * _this.DGAMES.length)];
                    // console.log(this.Dgame)
                    _this.$gID = _this.Dgame.game;
                    _this.title = _this.Dgame.details.title;
                    _this.image = _this.Dgame.details.images[0].url;
                    _this.playersMax = _this.Dgame.details.playersMax;
                    _this.playersMin = _this.Dgame.details.playersMin;
                    _this.playersReady = _this.Dgame.details.playersReady;
                    _this.runTimer = true;
                    _this.onTimer();
                    _this.cd.detectChanges();
                });
            }
            else {
                console.log("no global games here");
                //no  success here check local
            }
        }, function (error) {
            console.error('error getting global games' + JSON.stringify(error));
        });
    };
    // --------------------------------------------------------------------
    // bring local games
    HomeComponent.prototype.bLOCALGAMES = function () {
        var _this = this;
        console.log("getting local games" + this.lat, this.lng);
        this.$game.bLOCALGAMES(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    // console.log(jordi.payload[0])
                    var r = jordi.payload[0];
                    _this.LOCALGAMES = jordi.payload[0];
                    _this.cd.detectChanges();
                });
            }
            else {
                // console.log(jordi)
            }
        });
    };
    HomeComponent.prototype.PARSE = function (value) {
        ///get game id
        // console.log(JSON.parse(value))
        return JSON.parse(value);
    };
    // --------------------------------------------------------------------
    // Game  Action
    HomeComponent.prototype.onTimer = function () {
        var _this = this;
        if (this.OTIMER) {
            timer["clearTimeout"](this.OTIMER);
        }
        this.OTIMER = timer["setInterval"](function () {
            _this.$game.onTimer(_this.token, _this.user, _this.$gID)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.zone.run(function () {
                        _this.Dgame = jordi.payload[0];
                        if (_this.Dgame) {
                            // console.log(this.Dgame, this.$gID)
                            _this.title = _this.Dgame.details.title;
                            _this.image = _this.Dgame.details.images[0].url;
                            _this.playersMax = _this.Dgame.details.playersMax;
                            _this.playersMin = _this.Dgame.details.playersMin;
                            _this.playersReady = _this.Dgame.details.playersReady;
                            _this.GAMEFULL = _this.Dgame.details.full;
                            _this.GAMESTARTED = _this.Dgame.details.started;
                            _this.GAMECOMPLETE = _this.Dgame.details.completed;
                            _this.liveGame = jordi.liveGame;
                            _this.PLAYERS = _this.Dgame.players;
                            _this.playersHeight = (_this.PLAYERS.length * 150) + 900;
                            _this.USERINGAME = _this.PLAYERS.find(function (x) { return x.user == _this.user; });
                            _this.gameTime = jordi.timer;
                            // console.log(this.$gID)
                        }
                        else {
                            // this.Dgame = this.DGAMES[Math.floor(Math.random() * this.DGAMES.length)];
                            // this.$gID = this.Dgame.game
                            // console.log(this.Dgame, this.$gID)
                        }
                        // console.log(jordi.timer)
                        _this.cd.detectChanges();
                    });
                    //console.log("timer running")
                }
                else {
                    console.log("timer error");
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.onPlay = function (code) {
        var _this = this;
        // console.log(this.lat, this.lng)
        this.$game.play(this.token, this.user, this.$gID, code)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.pop(jordi.message, 'success');
                    _this.cd.detectChanges();
                });
            }
            else {
                if (jordi.type == 1) {
                    dialogs["prompt"]({
                        title: "Login/Signup",
                        message: "register or login securely  via email, enter your email address",
                        okButtonText: "send email",
                        cancelButtonText: "cancel",
                        inputType: dialogs["inputType"].email
                    }).then(function (r) {
                        if (r.text) {
                            _this.login(r.text);
                        }
                        else {
                        }
                        // console.log("Dialog result: " + r.result + ", text: " + r.text);
                    });
                }
                ///user profile is  not complete
                if (jordi.type == 2) {
                    _this.pop(jordi.message, 'error');
                    _this.zone.run(function () {
                        setTimeout(function () {
                            _this.gUSER();
                            _this.onBottomNavTap(3);
                            _this.cd.detectChanges();
                        }, 2000);
                    });
                }
                ///user is already in this  game
                if (jordi.type == 3) {
                    _this.pop(jordi.message, 'error');
                }
                if (jordi.type == 4) {
                    _this.zone.run(function () {
                        dialogs["prompt"]({
                            title: "Private Game",
                            message: "enter join code",
                            okButtonText: "Play",
                            cancelButtonText: "cancel",
                            inputType: dialogs["inputType"].text
                        }).then(function (r) {
                            if (r.text) {
                                _this.onPlay(r.text);
                            }
                            else {
                                _this.pop('what is the code?', 'error');
                            }
                            // console.log("Dialog result: " + r.result + ", text: " + r.text);
                        });
                        _this.cd.detectChanges();
                    });
                }
            }
        });
    };
    HomeComponent.prototype.onGrab = function () {
        var _this = this;
        this.$game.onGrab(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    HomeComponent.prototype.onSlap = function () {
        var _this = this;
        this.$game.onSlap(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    HomeComponent.prototype.onSneak = function () {
        var _this = this;
        this.$game.onSneak(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    // --------------------------------------------------------------------
    // login/register
    HomeComponent.prototype.login = function (number) {
        var _this = this;
        console.log(this.lat, this.lng, this.device, this.country);
        this.$game.login(number, this.device, this.lat, this.lng, this.country, this.deviceManufacturer, this.deviceModel, platform["isIOS"], platform["isAndroid"])
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    dialogs["prompt"]({
                        title: "verify account",
                        message: "enter your login code",
                        okButtonText: "log me in",
                        cancelButtonText: "cancel",
                        inputType: dialogs["inputType"].text
                    }).then(function (r) {
                        if (r.text) {
                            _this.loginComplete(r.text);
                        }
                        else {
                            _this.pop('what is  your email address?', 'error');
                        }
                        // console.log("Dialog result: " + r.result + ", text: " + r.text);
                    });
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.pop(jordi.message, 'error');
            }
        });
    };
    HomeComponent.prototype.loginComplete = function (code) {
        var _this = this;
        this.$game.loginComplete(code, this.device)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.token = jordi.token;
                    _this.user = jordi.user;
                    localStorage.setString('token', jordi.token);
                    localStorage.setString('user', jordi.user);
                    _this.pop("you are logged in", "success");
                    _this.gUSER();
                });
                _this.cd.detectChanges();
            }
            else {
                _this.pop(jordi.message, "error");
                setTimeout(function () {
                    _this.zone.run(function () {
                        dialogs["prompt"]({
                            title: "verify account",
                            message: "enter your login code",
                            okButtonText: "log me in",
                            cancelButtonText: "cancel",
                            inputType: dialogs["inputType"].text
                        }).then(function (r) {
                            if (r.text) {
                                _this.loginComplete(r.text);
                            }
                            else {
                                _this.pop('what is  your email address?', 'error');
                            }
                            // console.log("Dialog result: " + r.result + ", text: " + r.text);
                        });
                        _this.cd.detectChanges();
                    });
                }, 2000);
            }
        });
    };
    HomeComponent.prototype.onPayAddress = function () {
        var _this = this;
        this.zone.run(function () {
            dialogs["prompt"]({
                title: "Payout Address",
                message: "payout address for your bitcoin wins",
                okButtonText: "save",
                cancelButtonText: "cancel",
                inputType: dialogs["inputType"].text
            }).then(function (r) {
                if (r.text) {
                    _this.onPayAddressComplete(r.text);
                }
                else {
                    _this.pop('what is payout address?', 'error');
                }
                // console.log("Dialog result: " + r.result + ", text: " + r.text);
            });
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onPayAddressComplete = function (address) {
        var _this = this;
        this.$game.onPayAddress(this.token, this.user, address)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.pop(jordi.message, 'success');
                _this.gUSER();
            }
            else {
                _this.pop(jordi.message, 'error');
            }
        });
    };
    HomeComponent.prototype.onWithdraw = function (type) {
        var _this = this;
        this.zone.run(function () {
            dialogs["prompt"]({
                title: "Amount To Withdraw",
                message: "enter the amount to withdraw",
                okButtonText: "withdraw",
                cancelButtonText: "cancel",
                inputType: dialogs["inputType"].text
            }).then(function (r) {
                if (r.text) {
                    _this.$game.onWithdraw(_this.token, _this.user, r.text, type)
                        .subscribe(function (jordi) {
                        if (jordi.success) {
                            _this.pop(jordi.message, 'success');
                            _this.gUSER();
                        }
                        else {
                            _this.pop(jordi.message, 'error');
                        }
                    });
                }
                else {
                    _this.pop('what the withdraw  amount?', 'error');
                }
                // console.log("Dialog result: " + r.result + ", text: " + r.text);
            });
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onShare = function () {
        social_share["shareUrl"]("https://play.google.com/store/apps/details?id=grabbit.cheap", "come play grabbit with me, we can win awesome prizes together");
    };
    HomeComponent.prototype.onProve = function (address) {
        utils["openUrl"]("https://www.blockchain.com/btc/address/" + address);
    };
    HomeComponent.prototype.onRedeem = function (qr) {
        var _this = this;
        this.zone.run(function () {
            _this.redeemQR = qr;
            _this.showRedeem = true;
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onReload = function (type) {
        var _this = this;
        this.$game.reload(this.token, this.user, this.$gID, type)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.message = 'reloaded';
                });
            }
            else {
                _this.message = jordi.message;
            }
        });
        this.cd.detectChanges();
    };
    // --------------------------------------------------------------------
    // User Interaction
    // MY: Tabs selected index is changed, e.g. when swipe to navigate.
    HomeComponent.prototype.onSelectedIndexChanged = function (args) {
        var _this = this;
        this.zone.run(function () {
            if (args.newIndex !== _this.currentTabIndex) {
                _this.onBottomNavTap(args.newIndex);
            }
            _this.cd.detectChanges();
        });
    };
    // Tap on a one of the tabs
    HomeComponent.prototype.onBottomNavTap = function (index, duration) {
        var _this = this;
        if (duration === void 0) { duration = 300; }
        this.zone.run(function () {
            if (_this.currentTabIndex !== index) {
                var tabContentsArr = _this.tabContents.toArray();
                // set unfocus to previous index
                tabContentsArr[_this.currentTabIndex].nativeElement.animate(_this.getUnfocusAnimation(_this.currentTabIndex, duration));
                // set focus to current index
                tabContentsArr[index].nativeElement.animate(_this.getFocusAnimation(index, duration));
            }
            // MY: Change the selected index of Tabs when tap on tab strip
            if (_this.tabs.nativeElement.selectedIndex !== index) {
                _this.tabs.nativeElement.selectedIndex = index;
            }
            // this.centerCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
            // this.leftTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
            // this.rightTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
            // this.centerPatch.nativeElement.animate(this.getSlideAnimation(index, duration));
            // this.dragCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
            // set current index to new index
            _this.currentTabIndex = index;
            // console.log(this.currentTabIndex, index)
            if (index != 2) {
                timer["clearTimeout"](_this.OTIMER);
                _this.$setID = null;
            }
            else {
                if (!_this.$setID) {
                    _this.bGLOBALGAMES();
                }
                _this.gUSER();
                console.log("got user");
                _this.onTimer();
            }
            _this.cd.detectChanges();
        });
    };
    // Drag the focus circle to one of the tabs
    HomeComponent.prototype.onCenterCirclePan = function (args) {
        var grdLayout = args.object;
        var newX = grdLayout.translateX + args.deltaX - this.prevDeltaX;
        if (args.state === 0) {
            // finger down
            this.prevDeltaX = 0;
        }
        else if (args.state === 2) {
            // finger moving
            grdLayout.translateX = newX;
            this.leftTabs.nativeElement.translateX = newX;
            this.rightTabs.nativeElement.translateX = newX;
            this.centerPatch.nativeElement.translateX = newX;
            this.centerCircle.nativeElement.translateX = newX;
            this.prevDeltaX = args.deltaX;
        }
        else if (args.state === 3) {
            // finger up
            this.prevDeltaX = 0;
            var tabWidth = platform["screen"].mainScreen.widthDIPs / this.tabList.length;
            var tabSelected = Math.round(Math.abs(newX / tabWidth));
            var translateX = tabSelected * tabWidth;
            if (newX < 0) {
                // pan left
                this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
                // MY: Change the selected index of Tabs when pan left
                this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
            }
            else {
                // pan right
                this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
                // MY: Change the selected index of Tabs when pan right
                this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
            }
        }
    };
    // --------------------------------------------------------------------
    // Tab bar helpers
    HomeComponent.prototype.initializeTabBar = function () {
        // set up base layer
        this.leftTabs.nativeElement.width = platform["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = platform["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(platform["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
        // set default selected tab
        var tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
        this.currentTabIndex = this.defaultSelected;
        console.log("tabs initialized");
        //get user
        this.gStorage();
    };
    HomeComponent.prototype.getSlideAnimation = function (index, duration) {
        return {
            translate: { x: this.getTabTranslateX(index), y: 0 },
            curve: this.animationCurve,
            duration: duration
        };
    };
    HomeComponent.prototype.getFocusAnimation = function (index, duration) {
        return {
            scale: { x: 1.5, y: 1.5 },
            translate: { x: 0, y: -15 },
            duration: duration
        };
    };
    HomeComponent.prototype.getUnfocusAnimation = function (index, duration) {
        return {
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration
        };
    };
    HomeComponent.prototype.getTabTranslateX = function (index) {
        return index * platform["screen"].mainScreen.widthDIPs / this.tabList.length - (platform["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    HomeComponent.prototype.setGameId = function (gID) {
        var _this = this;
        this.zone.run(function () {
            setTimeout(function () {
                _this.$gID = gID;
                _this.$setID = gID;
                _this.onBottomNavTap(2);
                _this.cd.detectChanges();
            }, 1000);
        });
    };
    HomeComponent.prototype.pop = function (message, type) {
        var options = {
            title: type,
            message: message,
            okButtonText: "OK"
        };
        Object(dialogs["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    HomeComponent.prototype.onType = function (value) {
        var _this = this;
        this.zone.run(function () {
            if (_this.$gType == 'local') {
                _this.$gType = 'global';
            }
            else {
                _this.$gType = 'local';
                _this.bLOCALGAMES();
            }
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onCopy = function (text) {
        var _this = this;
        Object(clipboard["setText"])(text)
            .then(function () { return _this.pop("copied  to  clipboard", 'success'); })
            .catch(function (err) { return _this.pop("error copying, try again", 'error'); });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.run(function () {
            _this.runTimer = false;
            if (_this.OTIMER) {
                timer["clearTimeout"](_this.OTIMER);
            }
            _this.cd.detectChanges();
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: fesm5_http["HttpClient"] },
        { type: game["a" /* GameProvider */] },
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: angular_router["RouterExtensions"] },
        { type: page_page["Page"] }
    ]; };
    __decorate([
        Object(core["ViewChild"])('tabs', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "tabs", void 0);
    __decorate([
        Object(core["ViewChild"])('centerCircle', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "centerCircle", void 0);
    __decorate([
        Object(core["ViewChild"])('dragCircle', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "dragCircle", void 0);
    __decorate([
        Object(core["ViewChild"])('leftTabs', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "leftTabs", void 0);
    __decorate([
        Object(core["ViewChild"])('rightTabs', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "rightTabs", void 0);
    __decorate([
        Object(core["ViewChild"])('centerPatch', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "centerPatch", void 0);
    __decorate([
        Object(core["ViewChild"])('tabBGContainer', { static: true }),
        __metadata("design:type", core["ElementRef"])
    ], HomeComponent.prototype, "tabBGContainer", void 0);
    __decorate([
        Object(core["ViewChildren"])('tabContents', { read: core["ElementRef"] }),
        __metadata("design:type", core["QueryList"])
    ], HomeComponent.prototype, "tabContents", void 0);
    HomeComponent = __decorate([
        Object(core["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__(543)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(544)).default]
        }),
        __metadata("design:paramtypes", [fesm5_http["HttpClient"], game["a" /* GameProvider */], core["NgZone"], core["ChangeDetectorRef"], angular_router["RouterExtensions"], page_page["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());


// CONCATENATED MODULE: ./home/home-routing.module.ts



var routes = [
    { path: "", component: home_component_HomeComponent }
];
var home_routing_module_HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(core["NgModule"])({
            imports: [angular_router["NativeScriptRouterModule"].forChild(routes)],
            exports: [angular_router["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());


// CONCATENATED MODULE: ./home/home.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return home_module_HomeModule; });












var home_module_HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(core["NgModule"])({
            imports: [
                side_drawer_directives["NativeScriptUISideDrawerModule"],
                listview_directives["NativeScriptUIListViewModule"],
                calendar_directives["NativeScriptUICalendarModule"],
                chart_directives["NativeScriptUIChartModule"],
                dataform_directives["NativeScriptUIDataFormModule"],
                autocomplete_directives["NativeScriptUIAutoCompleteTextViewModule"],
                gauges_directives["NativeScriptUIGaugeModule"],
                common["NativeScriptCommonModule"],
                home_routing_module_HomeRoutingModule,
                angular_forms["NativeScriptFormsModule"]
            ],
            declarations: [
                home_component_HomeComponent
            ],
            schemas: [
                core["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);