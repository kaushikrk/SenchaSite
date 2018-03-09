var register=function(){
    var mc=Ext.first('#mainContainer');
    var actors=Ext.create({
        xtype:'actorDetails',
        title:'Male actor'
    });
    var fields=actors.down('[editable]=false');
    fields.each(function(el,arr,index){
        el.editable=true;
    });
    mc.suspendLayouts();
    mc.removeAll();
    mc.add(actors);
    mc.resumeLayouts(true);
};