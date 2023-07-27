import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ChartbyadminComponent } from './components/chartbyadmin/chartbyadmin.component';
import { StatbyadminComponent } from './components/statbyadmin/statbyadmin.component';
import { MenubyadminComponent } from './components/menubyadmin/menubyadmin.component';
import { LoginbyadminComponent } from './components/loginbyadmin/loginbyadmin.component';
import { FooterbyadminComponent } from './components/footerbyadmin/footerbyadmin.component';
import { HeaderbyadminComponent } from './components/headerbyadmin/headerbyadmin.component';
import { ChartbyuserComponent } from './components/chartbyuser/chartbyuser.component';
import { StatbyuserComponent } from './components/statbyuser/statbyuser.component';
import { MenubyuserComponent } from './components/menubyuser/menubyuser.component';
import { LoginbyuserComponent } from './components/loginbyuser/loginbyuser.component';
import { FooterbyuserComponent } from './components/footerbyuser/footerbyuser.component';
import { HeaderbyuserComponent } from './components/headerbyuser/headerbyuser.component';
import { CreateadminbyadminComponent } from './components/createadminbyadmin/createadminbyadmin.component';
import { CreateuserbyadminComponent } from './components/createuserbyadmin/createuserbyadmin.component';
import { CreateproductbyadminComponent } from './components/createproductbyadmin/createproductbyadmin.component';
import { CreatecategorieproductbyadminComponent } from './components/createcategorieproductbyadmin/createcategorieproductbyadmin.component';
import { CreateinventoryproductbyadminComponent } from './components/createinventoryproductbyadmin/createinventoryproductbyadmin.component';
import { CreatediscountbyadminComponent } from './components/creatediscountbyadmin/creatediscountbyadmin.component';
import { CreateorderdetailbyadminComponent } from './components/createorderdetailbyadmin/createorderdetailbyadmin.component';
import { CreateorderitembyadminComponent } from './components/createorderitembyadmin/createorderitembyadmin.component';
import { CreatepaymentdetailbyadminComponent } from './components/createpaymentdetailbyadmin/createpaymentdetailbyadmin.component';
import { CreatecarteitembyadminComponent } from './components/createcarteitembyadmin/createcarteitembyadmin.component';
import { CreateshoppingsessionbyadminComponent } from './components/createshoppingsessionbyadmin/createshoppingsessionbyadmin.component';
import { CreateuserpaiementbyadminComponent } from './components/createuserpaiementbyadmin/createuserpaiementbyadmin.component';
import { CreateuserprofilbyadminComponent } from './components/createuserprofilbyadmin/createuserprofilbyadmin.component';
import { CreatenotificationbyadminComponent } from './components/createnotificationbyadmin/createnotificationbyadmin.component';
import { CreatemessagebyadminComponent } from './components/createmessagebyadmin/createmessagebyadmin.component';
import { EditadminbyadminComponent } from './components/editadminbyadmin/editadminbyadmin.component';
import { EdituserbyadminComponent } from './components/edituserbyadmin/edituserbyadmin.component';
import { EditproductbyadminComponent } from './components/editproductbyadmin/editproductbyadmin.component';
import { EditcategorieproductbyadminComponent } from './components/editcategorieproductbyadmin/editcategorieproductbyadmin.component';
import { EditinventoryproductbyadminComponent } from './components/editinventoryproductbyadmin/editinventoryproductbyadmin.component';
import { EditdiscountbyadminComponent } from './components/editdiscountbyadmin/editdiscountbyadmin.component';
import { EditorderdetailbyadminComponent } from './components/editorderdetailbyadmin/editorderdetailbyadmin.component';
import { EditorderitembyadminComponent } from './components/editorderitembyadmin/editorderitembyadmin.component';
import { EditpaymentdetailbyadminComponent } from './components/editpaymentdetailbyadmin/editpaymentdetailbyadmin.component';
import { EditcarteitembyadminComponent } from './components/editcarteitembyadmin/editcarteitembyadmin.component';
import { EditshoppingsessionbyadminComponent } from './components/editshoppingsessionbyadmin/editshoppingsessionbyadmin.component';
import { EdituserpaiementbyadminComponent } from './components/edituserpaiementbyadmin/edituserpaiementbyadmin.component';
import { EdituserprofilbyadminComponent } from './components/edituserprofilbyadmin/edituserprofilbyadmin.component';
import { EditnotificationbyadminComponent } from './components/editnotificationbyadmin/editnotificationbyadmin.component';
import { EditmessagebyadminComponent } from './components/editmessagebyadmin/editmessagebyadmin.component';
import { ListadminbyadminComponent } from './components/listadminbyadmin/listadminbyadmin.component';
import { ListuserbyadminComponent } from './components/listuserbyadmin/listuserbyadmin.component';
import { ListproductbyadminComponent } from './components/listproductbyadmin/listproductbyadmin.component';
import { ListcategorieproductbyadminComponent } from './components/listcategorieproductbyadmin/listcategorieproductbyadmin.component';
import { ListinventoryproductbyadminComponent } from './components/listinventoryproductbyadmin/listinventoryproductbyadmin.component';
import { ListdiscountbyadminComponent } from './components/listdiscountbyadmin/listdiscountbyadmin.component';
import { ListorderdetailbyadminComponent } from './components/listorderdetailbyadmin/listorderdetailbyadmin.component';
import { ListorderitembyadminComponent } from './components/listorderitembyadmin/listorderitembyadmin.component';
import { ListpaymentdetailbyadminComponent } from './components/listpaymentdetailbyadmin/listpaymentdetailbyadmin.component';
import { ListcarteitembyadminComponent } from './components/listcarteitembyadmin/listcarteitembyadmin.component';
import { ListshoppingsessionbyadminComponent } from './components/listshoppingsessionbyadmin/listshoppingsessionbyadmin.component';
import { ListuserpaiementbyadminComponent } from './components/listuserpaiementbyadmin/listuserpaiementbyadmin.component';
import { ListuserprofilbyadminComponent } from './components/listuserprofilbyadmin/listuserprofilbyadmin.component';
import { ListnotificationbyadminComponent } from './components/listnotificationbyadmin/listnotificationbyadmin.component';
import { ListmessagebyadminComponent } from './components/listmessagebyadmin/listmessagebyadmin.component';
import { DetailadminbyadminComponent } from './components/detailadminbyadmin/detailadminbyadmin.component';
import { DetailuserbyadminComponent } from './components/detailuserbyadmin/detailuserbyadmin.component';
import { DetailproductbyadminComponent } from './components/detailproductbyadmin/detailproductbyadmin.component';
import { DetailcategorieproductbyadminComponent } from './components/detailcategorieproductbyadmin/detailcategorieproductbyadmin.component';
import { DetailinventoryproductbyadminComponent } from './components/detailinventoryproductbyadmin/detailinventoryproductbyadmin.component';
import { DetaildiscountbyadminComponent } from './components/detaildiscountbyadmin/detaildiscountbyadmin.component';
import { DetailorderdetailbyadminComponent } from './components/detailorderdetailbyadmin/detailorderdetailbyadmin.component';
import { DetailorderitembyadminComponent } from './components/detailorderitembyadmin/detailorderitembyadmin.component';
import { DetailpaymentdetailbyadminComponent } from './components/detailpaymentdetailbyadmin/detailpaymentdetailbyadmin.component';
import { DetailcarteitembyadminComponent } from './components/detailcarteitembyadmin/detailcarteitembyadmin.component';
import { DetailshoppingsessionbyadminComponent } from './components/detailshoppingsessionbyadmin/detailshoppingsessionbyadmin.component';
import { DetailuserpaiementbyadminComponent } from './components/detailuserpaiementbyadmin/detailuserpaiementbyadmin.component';
import { DetailuserprofilbyadminComponent } from './components/detailuserprofilbyadmin/detailuserprofilbyadmin.component';
import { DetailnotificationbyadminComponent } from './components/detailnotificationbyadmin/detailnotificationbyadmin.component';
import { DetailmessagebyadminComponent } from './components/detailmessagebyadmin/detailmessagebyadmin.component';
import { CreateadminbyuserComponent } from './components/createadminbyuser/createadminbyuser.component';
import { CreateuserbyuserComponent } from './components/createuserbyuser/createuserbyuser.component';
import { CreateproductbyuserComponent } from './components/createproductbyuser/createproductbyuser.component';
import { CreatecategorieproductbyuserComponent } from './components/createcategorieproductbyuser/createcategorieproductbyuser.component';
import { CreateinventoryproductbyuserComponent } from './components/createinventoryproductbyuser/createinventoryproductbyuser.component';
import { CreatediscountbyuserComponent } from './components/creatediscountbyuser/creatediscountbyuser.component';
import { CreateorderdetailbyuserComponent } from './components/createorderdetailbyuser/createorderdetailbyuser.component';
import { CreateorderitembyuserComponent } from './components/createorderitembyuser/createorderitembyuser.component';
import { CreatepaymentdetailbyuserComponent } from './components/createpaymentdetailbyuser/createpaymentdetailbyuser.component';
import { CreatecarteitembyuserComponent } from './components/createcarteitembyuser/createcarteitembyuser.component';
import { CreateshoppingsessionbyuserComponent } from './components/createshoppingsessionbyuser/createshoppingsessionbyuser.component';
import { CreateuserpaiementbyuserComponent } from './components/createuserpaiementbyuser/createuserpaiementbyuser.component';
import { CreateuserprofilbyuserComponent } from './components/createuserprofilbyuser/createuserprofilbyuser.component';
import { CreatenotificationbyuserComponent } from './components/createnotificationbyuser/createnotificationbyuser.component';
import { CreatemessagebyuserComponent } from './components/createmessagebyuser/createmessagebyuser.component';
import { EditadminbyuserComponent } from './components/editadminbyuser/editadminbyuser.component';
import { EdituserbyuserComponent } from './components/edituserbyuser/edituserbyuser.component';
import { EditproductbyuserComponent } from './components/editproductbyuser/editproductbyuser.component';
import { EditcategorieproductbyuserComponent } from './components/editcategorieproductbyuser/editcategorieproductbyuser.component';
import { EditinventoryproductbyuserComponent } from './components/editinventoryproductbyuser/editinventoryproductbyuser.component';
import { EditdiscountbyuserComponent } from './components/editdiscountbyuser/editdiscountbyuser.component';
import { EditorderdetailbyuserComponent } from './components/editorderdetailbyuser/editorderdetailbyuser.component';
import { EditorderitembyuserComponent } from './components/editorderitembyuser/editorderitembyuser.component';
import { EditpaymentdetailbyuserComponent } from './components/editpaymentdetailbyuser/editpaymentdetailbyuser.component';
import { EditcarteitembyuserComponent } from './components/editcarteitembyuser/editcarteitembyuser.component';
import { EditshoppingsessionbyuserComponent } from './components/editshoppingsessionbyuser/editshoppingsessionbyuser.component';
import { EdituserpaiementbyuserComponent } from './components/edituserpaiementbyuser/edituserpaiementbyuser.component';
import { EdituserprofilbyuserComponent } from './components/edituserprofilbyuser/edituserprofilbyuser.component';
import { EditnotificationbyuserComponent } from './components/editnotificationbyuser/editnotificationbyuser.component';
import { EditmessagebyuserComponent } from './components/editmessagebyuser/editmessagebyuser.component';
import { ListadminbyuserComponent } from './components/listadminbyuser/listadminbyuser.component';
import { ListuserbyuserComponent } from './components/listuserbyuser/listuserbyuser.component';
import { ListproductbyuserComponent } from './components/listproductbyuser/listproductbyuser.component';
import { ListcategorieproductbyuserComponent } from './components/listcategorieproductbyuser/listcategorieproductbyuser.component';
import { ListinventoryproductbyuserComponent } from './components/listinventoryproductbyuser/listinventoryproductbyuser.component';
import { ListdiscountbyuserComponent } from './components/listdiscountbyuser/listdiscountbyuser.component';
import { ListorderdetailbyuserComponent } from './components/listorderdetailbyuser/listorderdetailbyuser.component';
import { ListorderitembyuserComponent } from './components/listorderitembyuser/listorderitembyuser.component';
import { ListpaymentdetailbyuserComponent } from './components/listpaymentdetailbyuser/listpaymentdetailbyuser.component';
import { ListcarteitembyuserComponent } from './components/listcarteitembyuser/listcarteitembyuser.component';
import { ListshoppingsessionbyuserComponent } from './components/listshoppingsessionbyuser/listshoppingsessionbyuser.component';
import { ListuserpaiementbyuserComponent } from './components/listuserpaiementbyuser/listuserpaiementbyuser.component';
import { ListuserprofilbyuserComponent } from './components/listuserprofilbyuser/listuserprofilbyuser.component';
import { ListnotificationbyuserComponent } from './components/listnotificationbyuser/listnotificationbyuser.component';
import { ListmessagebyuserComponent } from './components/listmessagebyuser/listmessagebyuser.component';
import { DetailadminbyuserComponent } from './components/detailadminbyuser/detailadminbyuser.component';
import { DetailuserbyuserComponent } from './components/detailuserbyuser/detailuserbyuser.component';
import { DetailproductbyuserComponent } from './components/detailproductbyuser/detailproductbyuser.component';
import { DetailcategorieproductbyuserComponent } from './components/detailcategorieproductbyuser/detailcategorieproductbyuser.component';
import { DetailinventoryproductbyuserComponent } from './components/detailinventoryproductbyuser/detailinventoryproductbyuser.component';
import { DetaildiscountbyuserComponent } from './components/detaildiscountbyuser/detaildiscountbyuser.component';
import { DetailorderdetailbyuserComponent } from './components/detailorderdetailbyuser/detailorderdetailbyuser.component';
import { DetailorderitembyuserComponent } from './components/detailorderitembyuser/detailorderitembyuser.component';
import { DetailpaymentdetailbyuserComponent } from './components/detailpaymentdetailbyuser/detailpaymentdetailbyuser.component';
import { DetailcarteitembyuserComponent } from './components/detailcarteitembyuser/detailcarteitembyuser.component';
import { DetailshoppingsessionbyuserComponent } from './components/detailshoppingsessionbyuser/detailshoppingsessionbyuser.component';
import { DetailuserpaiementbyuserComponent } from './components/detailuserpaiementbyuser/detailuserpaiementbyuser.component';
import { DetailuserprofilbyuserComponent } from './components/detailuserprofilbyuser/detailuserprofilbyuser.component';
import { DetailnotificationbyuserComponent } from './components/detailnotificationbyuser/detailnotificationbyuser.component';
import { DetailmessagebyuserComponent } from './components/detailmessagebyuser/detailmessagebyuser.component';



import { VisiteurheaderComponent } from './components/visiteurheader/visiteurheader.component';


import { VisiteurfooterComponent } from './components/visiteurfooter/visiteurfooter.component';
import { VisiteurmenuComponent } from './components/visiteurmenu/visiteurmenu.component';
import { VisiteurmyaccountComponent } from './components/visiteurmyaccount/visiteurmyaccount.component';
import { VisiteurloginComponent } from './components/visiteurlogin/visiteurlogin.component';
import { VisiteurregisterComponent } from './components/visiteurregister/visiteurregister.component';
import { VisiteurmycartComponent } from './components/visiteurmycart/visiteurmycart.component';
import { VisiteurchekoutComponent } from './components/visiteurchekout/visiteurchekout.component';
import { VisiteurmywishlistComponent } from './components/visiteurmywishlist/visiteurmywishlist.component';
import { VisiteurgalleryComponent } from './components/visiteurgallery/visiteurgallery.component';
import { VisiteuraccordionComponent } from './components/visiteuraccordion/visiteuraccordion.component';
import { VisiteurcarrousselComponent } from './components/visiteurcarroussel/visiteurcarroussel.component';
import { VisiteurmapComponent } from './components/visiteurmap/visiteurmap.component';
import { VisiteurtabComponent } from './components/visiteurtab/visiteurtab.component';
import { VisiteurproducttagComponent } from './components/visiteurproducttag/visiteurproducttag.component';
import { VisiteurpopularbrandComponent } from './components/visiteurpopularbrand/visiteurpopularbrand.component';
import { VisiteurlatestproductComponent } from './components/visiteurlatestproduct/visiteurlatestproduct.component';
import { VisiteurclientssaysComponent } from './components/visiteurclientssays/visiteurclientssays.component';
import { VisiteurnewproductComponent } from './components/visiteurnewproduct/visiteurnewproduct.component';
import { VisiteurmostviewedComponent } from './components/visiteurmostviewed/visiteurmostviewed.component';
import { VisiteurhotsalesComponent } from './components/visiteurhotsales/visiteurhotsales.component';
import { VisiteurlatestblogComponent } from './components/visiteurlatestblog/visiteurlatestblog.component';
import { VisiteurnewarrivalComponent } from './components/visiteurnewarrival/visiteurnewarrival.component';
import { VisiteurbestsellerComponent } from './components/visiteurbestseller/visiteurbestseller.component';
import { VisiteurhotdealComponent } from './components/visiteurhotdeal/visiteurhotdeal.component';
import { VisiteurfeaturedComponent } from './components/visiteurfeatured/visiteurfeatured.component';
import { VisiteurcategoryComponent } from './components/visiteurcategory/visiteurcategory.component';
import { VisiteursearchComponent } from './components/visiteursearch/visiteursearch.component';
import { VisiteurproductdetailComponent } from './components/visiteurproductdetail/visiteurproductdetail.component';



const routes: Routes = [




  { path: '', component:VisiteurnewproductComponent},

  { path: 'admin', component:LoginbyadminComponent},
  




  { path: 'VisiteurheaderComponent', component:VisiteurheaderComponent},
  { path: 'VisiteurfooterComponent', component:VisiteurfooterComponent},
  { path: 'VisiteurmenuComponent', component:VisiteurmenuComponent},
  { path: 'VisiteurmyaccountComponent', component:VisiteurmyaccountComponent},
  { path: 'VisiteurloginComponent', component:VisiteurloginComponent},
  { path: 'VisiteurregisterComponent', component:VisiteurregisterComponent},
  { path: 'VisiteurmycartComponent', component:VisiteurmycartComponent},
  { path: 'VisiteurchekoutComponent', component:VisiteurchekoutComponent},
  { path: 'VisiteurmywishlistComponent', component:VisiteurmywishlistComponent},
  { path: 'VisiteurgalleryComponent', component:VisiteurgalleryComponent},
  { path: 'VisiteuraccordionComponent', component:VisiteuraccordionComponent},
  { path: 'VisiteurcarrousselComponent', component:VisiteurcarrousselComponent},
  { path: 'VisiteurmapComponent', component:VisiteurmapComponent},
  { path: 'VisiteurtabComponent', component:VisiteurtabComponent},
  { path: 'VisiteurproducttagComponent', component:VisiteurproducttagComponent},
  { path: 'VisiteurpopularbrandComponent', component:VisiteurpopularbrandComponent},
  { path: 'VisiteurlatestproductComponent', component:VisiteurlatestproductComponent},
  { path: 'VisiteurclientssaysComponent', component:VisiteurclientssaysComponent},
  { path: 'VisiteurnewproductComponent', component:VisiteurnewproductComponent},
  { path: 'VisiteurmostviewedComponent', component:VisiteurmostviewedComponent},
  { path: 'VisiteurhotsalesComponent', component:VisiteurhotsalesComponent},
  { path: 'VisiteurlatestblogComponent', component:VisiteurlatestblogComponent},
  { path: 'VisiteurnewarrivalComponent', component:VisiteurnewarrivalComponent},
  { path: 'VisiteurbestsellerComponent', component:VisiteurbestsellerComponent},
  { path: 'VisiteurhotdealComponent', component:VisiteurhotdealComponent},
  { path: 'VisiteurfeaturedComponent', component:VisiteurfeaturedComponent},
  { path: 'VisiteurcategoryComponent', component:VisiteurcategoryComponent},
  { path: 'VisiteursearchComponent', component:VisiteursearchComponent},


  { path: 'VisiteurproductdetailComponent/:id', component:VisiteurproductdetailComponent},
  





















  { path: 'chartbyadmin', component:ChartbyadminComponent},
  { path: 'statbyadmin', component:StatbyadminComponent},
  { path: 'menubyadmin', component:MenubyadminComponent},
  { path: 'loginbyadmin', component:LoginbyadminComponent},
  { path: 'footerbyadmin', component:FooterbyadminComponent},
  { path: 'headerbyadmin', component:HeaderbyadminComponent},

  { path: 'admincreeradmin', component:CreateadminbyadminComponent},
  { path: 'admincreeruser', component:CreateuserbyadminComponent},
  { path: 'admincreerproduct', component:CreateproductbyadminComponent},
  { path: 'admincreercategorieprodutc', component:CreatecategorieproductbyadminComponent},
  { path: 'admincreerinventoryproduct', component:CreateinventoryproductbyadminComponent},
  { path: 'admincreerdiscount', component:CreatediscountbyadminComponent},
  { path: 'admincreerorderdetails', component:CreateorderdetailbyadminComponent},
  { path: 'admincreerorderitem', component:CreateorderitembyadminComponent},
  { path: 'admincreerpaimentdetail', component:CreatepaymentdetailbyadminComponent},
  { path: 'admincreercarteitem', component:CreatecarteitembyadminComponent},
  { path: 'admincreershoppingsession', component:CreateshoppingsessionbyadminComponent},
  { path: 'admincreerusepaiment', component:CreateuserpaiementbyadminComponent},
  { path: 'admincreeruserprofil', component:CreateuserprofilbyadminComponent},
  { path: 'admincreernotification', component:CreatenotificationbyadminComponent},

  { path: 'admincreermessage', component:CreatemessagebyadminComponent},



  { path: 'chartbyuser', component:ChartbyuserComponent},
  { path: 'statbyuser', component:StatbyuserComponent},
  { path: 'menubyuser', component:MenubyuserComponent},
  { path: 'loginbyuser', component:LoginbyuserComponent},
  { path: 'footerbyuser', component:FooterbyuserComponent},
  { path: 'headerbyuser', component:HeaderbyuserComponent},

  { path: 'usercreeradmin', component:CreateadminbyuserComponent},
  { path: 'usercreeruser', component:CreateuserbyuserComponent},
  { path: 'usercreerproduct', component:CreateproductbyuserComponent},
  { path: 'usercreercategorieprodutc', component:CreatecategorieproductbyuserComponent},
  { path: 'usercreerinventoryproduct', component:CreateinventoryproductbyuserComponent},
  { path: 'usercreerdiscount', component:CreatediscountbyuserComponent},
  { path: 'usercreerorderdetails', component:CreateorderdetailbyuserComponent},
  { path: 'usercreerorderitem', component:CreateorderitembyuserComponent},
  { path: 'usercreerpaimentdetail', component:CreatepaymentdetailbyuserComponent},
  { path: 'usercreercarteitem', component:CreatecarteitembyuserComponent},
  { path: 'usercreershoppingsession', component:CreateshoppingsessionbyuserComponent},
  { path: 'usercreerusepaiment', component:CreateuserpaiementbyuserComponent},
  { path: 'usercreeruserprofil', component:CreateuserprofilbyuserComponent},
  { path: 'usercreernotification', component:CreatenotificationbyuserComponent},

  { path: 'usercreermessage', component:CreatemessagebyuserComponent},


  { path: 'chartbyadmin', component:ChartbyadminComponent},
  { path: 'statbyadmin', component:StatbyadminComponent},
  { path: 'menubyadmin', component:MenubyadminComponent},
  { path: 'loginbyadmin', component:LoginbyadminComponent},
  { path: 'footerbyadmin', component:FooterbyadminComponent},
  { path: 'headerbyadmin', component:HeaderbyadminComponent},

  { path: 'admineditadmin/:id', component:EditadminbyadminComponent},
  { path: 'adminedituser/:id', component:EdituserbyadminComponent},
  { path: 'admineditproduct/:id', component:EditproductbyadminComponent},
  { path: 'admineditcategorieprodutc/:id', component:EditcategorieproductbyadminComponent},
  { path: 'admineditinventoryproduct/:id', component:EditinventoryproductbyadminComponent},
  { path: 'admineditdiscount/:id', component:EditdiscountbyadminComponent},
  { path: 'admineditorderdetails/:id', component:EditorderdetailbyadminComponent},
  { path: 'admineditorderitem/:id', component:EditorderitembyadminComponent},
  { path: 'admineditpaimentdetail/:id', component:EditpaymentdetailbyadminComponent},
  { path: 'admineditcarteitem/:id', component:EditcarteitembyadminComponent},
  { path: 'admineditshoppingsession/:id', component:EditshoppingsessionbyadminComponent},
  { path: 'admineditusepaiment/:id', component:EdituserpaiementbyadminComponent},
  { path: 'adminedituserprofil/:id', component:EdituserprofilbyadminComponent},
  { path: 'admineditnotification/:id', component:EditnotificationbyadminComponent},

  { path: 'admineditmessage/:id', component:EditmessagebyadminComponent},
  { path: 'chartbyuser', component:ChartbyuserComponent},
  { path: 'statbyuser', component:StatbyuserComponent},
  { path: 'menubyuser', component:MenubyuserComponent},
  { path: 'loginbyuser', component:LoginbyuserComponent},
  { path: 'footerbyuser', component:FooterbyuserComponent},
  { path: 'headerbyuser', component:HeaderbyuserComponent},







  { path: 'admindetailadmin/:id', component:DetailadminbyadminComponent},
  { path: 'admindetailuser/:id', component:DetailuserbyadminComponent},
  { path: 'admindetailproduct/:id', component:DetailproductbyadminComponent},
  { path: 'admindetailcategorieprodutc/:id', component:DetailcategorieproductbyadminComponent},
  { path: 'admindetailinventoryproduct/:id', component:DetailinventoryproductbyadminComponent},
  { path: 'admindetaildiscount/:id', component:DetaildiscountbyadminComponent},
  { path: 'admindetailorderdetails/:id', component:DetailorderdetailbyadminComponent},
  { path: 'admindetailorderitem/:id', component:DetailorderitembyadminComponent},
  { path: 'admindetailpaimentdetail/:id', component:DetailpaymentdetailbyadminComponent},
  { path: 'admindetailcarteitem/:id', component:DetailcarteitembyadminComponent},
  { path: 'admindetailshoppingsession/:id', component:DetailshoppingsessionbyadminComponent},
  { path: 'admindetailusepaiment/:id', component:DetailuserpaiementbyadminComponent},
  { path: 'admindetailuserprofil/:id', component:DetailuserprofilbyadminComponent},
  { path: 'admindetailnotification/:id', component:DetailnotificationbyadminComponent},
  
  { path: 'admindetailmessage/:id', component:DetailmessagebyadminComponent},










  { path: 'usereditadmin/:id', component:EditadminbyuserComponent},
  { path: 'useredituser/:id', component:EdituserbyuserComponent},
  { path: 'usereditproduct/:id', component:EditproductbyuserComponent},
  { path: 'usereditcategorieprodutc/:id', component:EditcategorieproductbyuserComponent},
  { path: 'usereditinventoryproduct/:id', component:EditinventoryproductbyuserComponent},
  { path: 'usereditdiscount/:id', component:EditdiscountbyuserComponent},
  { path: 'usereditorderdetails/:id', component:EditorderdetailbyuserComponent},
  { path: 'usereditorderitem/:id', component:EditorderitembyuserComponent},
  { path: 'usereditpaimentdetail/:id', component:EditpaymentdetailbyuserComponent},
  { path: 'usereditcarteitem/:id', component:EditcarteitembyuserComponent},
  { path: 'usereditshoppingsession/:id', component:EditshoppingsessionbyuserComponent},
  { path: 'usereditusepaiment/:id', component:EdituserpaiementbyuserComponent},
  { path: 'useredituserprofil/:id', component:EdituserprofilbyuserComponent},
  { path: 'usereditnotification/:id', component:EditnotificationbyuserComponent},

  { path: 'usereditmessage/:id', component:EditmessagebyuserComponent},


  { path: 'chartbyadmin', component:ChartbyadminComponent},
  { path: 'statbyadmin', component:StatbyadminComponent},
  { path: 'menubyadmin', component:MenubyadminComponent},
  { path: 'loginbyadmin', component:LoginbyadminComponent},
  { path: 'footerbyadmin', component:FooterbyadminComponent},
  { path: 'headerbyadmin', component:HeaderbyadminComponent},



  

  { path: 'adminlistadmin', component:ListadminbyadminComponent},
  { path: 'adminlistuser', component:ListuserbyadminComponent},
  { path: 'adminlistproduct', component:ListproductbyadminComponent},
  { path: 'adminlistcategorieprodutc', component:ListcategorieproductbyadminComponent},
  { path: 'adminlistinventoryproduct', component:ListinventoryproductbyadminComponent},
  { path: 'adminlistdiscount', component:ListdiscountbyadminComponent},
  { path: 'adminlistorderdetails', component:ListorderdetailbyadminComponent},
  { path: 'adminlistorderitem', component:ListorderitembyadminComponent},
  { path: 'adminlistpaimentdetail', component:ListpaymentdetailbyadminComponent},
  { path: 'adminlistcarteitem', component:ListcarteitembyadminComponent},
  { path: 'adminlistshoppingsession', component:ListshoppingsessionbyadminComponent},
  { path: 'adminlistusepaiment', component:ListuserpaiementbyadminComponent},
  { path: 'adminlistuserprofil', component:ListuserprofilbyadminComponent},
  { path: 'adminlistnotification', component:ListnotificationbyadminComponent},

  { path: 'adminlistmessage', component:ListmessagebyadminComponent},
  { path: 'chartbyuser', component:ChartbyuserComponent},
  { path: 'statbyuser', component:StatbyuserComponent},
  { path: 'menubyuser', component:MenubyuserComponent},
  { path: 'loginbyuser', component:LoginbyuserComponent},
  { path: 'footerbyuser', component:FooterbyuserComponent},
  { path: 'headerbyuser', component:HeaderbyuserComponent},

  { path: 'userlistadmin', component:ListadminbyuserComponent},
  { path: 'userlistuser', component:ListuserbyuserComponent},
  { path: 'userlistproduct', component:ListproductbyuserComponent},
  { path: 'userlistcategorieprodutc', component:ListcategorieproductbyuserComponent},
  { path: 'userlistinventoryproduct', component:ListinventoryproductbyuserComponent},
  { path: 'userlistdiscount', component:ListdiscountbyuserComponent},
  { path: 'userlistorderdetails', component:ListorderdetailbyuserComponent},
  { path: 'userlistorderitem', component:ListorderitembyuserComponent},
  { path: 'userlistpaimentdetail', component:ListpaymentdetailbyuserComponent},
  { path: 'userlistcarteitem', component:ListcarteitembyuserComponent},
  { path: 'userlistshoppingsession', component:ListshoppingsessionbyuserComponent},
  { path: 'userlistusepaiment', component:ListuserpaiementbyuserComponent},
  { path: 'userlistuserprofil', component:ListuserprofilbyuserComponent},
  { path: 'userlistnotification', component:ListnotificationbyuserComponent},

  { path: 'userlistmessage', component:ListmessagebyuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
