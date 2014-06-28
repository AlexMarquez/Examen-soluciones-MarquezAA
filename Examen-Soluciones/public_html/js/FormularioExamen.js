Ext.application({
   name:'exa-mensito',
   launch:function(){ //la que lanza la aplicacion
    //Ext.Msg.confirm('Probar', 'Probando si todo lo hice bien');   
    
    Ext.create('Ext.TabPanel',{
       fullscreen:true,
       tabBarPosition:'bottom',
       items:[formulario1
           ,
           {
               title:'Farenheit',
               iconCls:'home',
               html:'Calculo de Centigrados a Farenheit'
           }
       ]
    });
   }
    
});

// Panel del calculo de farenheit a centigrados
var formulario1={
        xtype:'fieldset',
        title:'Centigrados',
        iconCls:'user',
        items:[
            {
                html:['<center><h1>Calculo de Farenheit a Centigrados</h1>',
                      '<br>',
                      '<p>Introduce el valor de gardos Farenheit en el campo siguiente</p>',
                      '</center>'].join('')
            },
            {
                xtype:'textfield',
                placeHolder:'Escribe los grados'
            },
            {
                xtype:'button',
                text:'Realizar conversión',
                ui:'confirm',
                handler:function(){
                    Ext.Msg.alert("Resultado de la conversion");
                }
            }
        ]
}