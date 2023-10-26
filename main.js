function preload() {
    
    }
    
    function setup() {
      canvas=createCanvas(400,400)
      canvas.center()
      video=createCapture( 300,300)
      video.hide()
    }
    
    function draw() {
      image(video,50,50,300,300)
      fill("red")
      circle(50,50,70)
      circle(350,50,70)
      circle(50,350,70)
      circle(350,350,70)
      fill("blue")
      rect(85,40,240,20)
      rect(85,350,240,20)
      rect(40,80,20,240)
      rect(350,80,20,240) 
    }
    function take_snapshot(){
      save("student.png")
    }