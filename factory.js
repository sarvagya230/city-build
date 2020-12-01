class factory
{
    constructor(x,y)
    {
        this.body=createSprite(x,y,40,40)

        database.ref('/').update(
            {
                wood:woodCount,
                steel:steelCount,
            }
          )
         
 

     

    }
   clicked()
    {
        this.body.shapeColor='red'
    }
  
  
 
}
