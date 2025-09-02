

ServerEvents.recipes(event=>{
    event.remove({ output: 'vs_eureka:balloon' })
    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)
    event.shaped(
        Item.of('vs_eureka:balloon', 4), // arg 1: output
        [
        ' A ',
        'ABA', // arg 2: the shape (array of strings)
        ' A '
        ],
    {
        A: 'minecraft:white_wool', 
        B: 'vs_clockwork:wanderlite_matrix',  //arg 3: the mapping object
    }
    )
    event.shaped(
        Item.of('vs_eureka:balloon', 4), // arg 1: output
        [
        ' A ',
        'ABA', // arg 2: the shape (array of strings)
        ' A '
        ],
    {
        A: 'minecraft:leather', 
        B: 'vs_clockwork:wanderlite_matrix',  //arg 3: the mapping object
    }
    )
    event.shaped(
        Item.of('vs_eureka:balloon', 16), // arg 1: output
        [
        ' A ',
        'ABA', // arg 2: the shape (array of strings)
        ' A '
        ],
    {
        A: 'minecraft:phantom_membrane', 
        B: 'vs_clockwork:wanderlite_matrix',  //arg 3: the mapping object
    }
    )
    event.shaped(
        Item.of('vs_eureka:balloon', 2), // arg 1: output
        [
        ' A ',
        'ABA', // arg 2: the shape (array of strings)
        ' A '
        ],
    {
        A: 'minecraft:paper', 
        B: 'vs_clockwork:wanderlite_matrix',  //arg 3: the mapping object
    }
    )
    
});
