
<script>
    // import '../js/jquery.parallax';
   
   

    import { onMount } from 'svelte';
  
    onMount(() => {
     
  
      let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let header = document.getElementById('header');
 

  window.addEventListener('scroll',function(){
    let value = window.scrollY;
    // @ts-ignore
    text.style.top = 50+value*-0.5+'%';
    // @ts-ignore
    btn.style.top = value*1.5+'px';
      // @ts-ignore
      header.style.top = value*+0.5+'px';
  })
    });





  </script>

<header id="header" >
    <a href="" class="logo">Ava</a>
    <ul class="menu">
        <li class="menulist"><a href="" class="">Home</a></li>
        <li class="menulist"><a href="" class="">About</a></li>
        <li class="menulist"><a href="" class="">Project</a></li>
        <li class="menulist"><a href="" class="">Contact</a></li>
    </ul>
</header>
<section >

    <h2 id="text"><span>It's time for a new </span><br>Advanture</h2>
    <a href="#" id="btn">Explore</a>
  
</section>
<div class="sec">

    <h2>About Me</h2>
  
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           </p>
    
    
</div>

<div class="project">
    <div class="row p-5" data-bg="https://source.unsplash.com/hh_7gviHosw/1920x1280" data-rate="0.2" data-effect="zoom" data-func="custom_show">
		<h1 class="col-12 text-center mb-5">jquery.parallax.js</h1>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Parallax Effect</h3></div>
					<div class="card-body p-0">
						Parallax Scrolling Effect For Background Images
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Scroll Animation</h3></div>
					<div class="card-body p-0">
						Animate elements on page scroll.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Easy To Use</h3></div>
					<div class="card-body p-0">
						Easy to implement via data attributes.
					</div>
				</div>
			</div>
		</div>
	</div>
    <div class="row p-5 bg-warning" data-func="show_2">
		<h1 class="col-12 text-center mb-5">Section</h1>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row p-5" data-bg="https://source.unsplash.com/uYw0_cEUZtI/1920x1280" data-rate="0.4" data-effect="flip-x">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md list_item">
			<div class="index">
				<div class="index-text">1</div>
				<div class="index-divider"></div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-title"><h3>Card Title</h3></div>
					<div class="card-body p-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum pretium lorem a tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row p-5 bg-primary" data-effect="flip-y">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-success" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-info mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-secondary" style="height:300px;"></div>
	</div>
	<div class="row p-5" data-bg="https://source.unsplash.com/dJqAoi8JQ-Q/1920x1280" data-rate="0.6" data-effect="slide-left">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
	</div>
	<div class="row p-5 bg-dark" data-effect="slide-right">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-success" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-info mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-secondary" style="height:300px;"></div>
	</div>
	<div class="row p-5" data-bg="https://source.unsplash.com/KdeqA3aTnBY/1920x1280" data-rate="0.5" data-effect="slide-up">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
	</div>
	<div class="row p-5 bg-warning" data-effect="slide-down">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-success" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-info mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-secondary" style="height:300px;"></div>
	</div>
	<div class="row p-5" data-bg="https://source.unsplash.com/-poL3YQTBPI/1920x1280" data-rate="0.3" data-effect="zoom" >
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
	</div>
	<div class="row p-5 bg-primary" data-effect="rand">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-success" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-info mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-secondary" style="height:300px;"></div>
	</div>
	<div class="row p-5" data-bg="https://source.unsplash.com/AqcgORY1aiM/1920x1280" data-rate="0.1" data-effect="rand">
		<h1 class="col-12 text-center mb-5">Page Section</h1>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light mx-0 mx-md-5 my-5 my-md-0" style="height:300px;"></div>
		<div class="col-12 col-md p-2 bg-light" style="height:300px;"></div>
	</div>
	<div class="row p-5 bg-dark">
		<h1 class="col-12 text-center mb-5" data-effect="random">Page Section</h1>
		<div class="col-12 col-md p-2 bg-success" style="height:300px;" data-effect="slide-left"></div>
		<div class="col-12 col-md p-2 bg-info mx-0 mx-md-5 my-5 my-md-0" style="height:300px;" data-effect="zoom"></div>
		<div class="col-12 col-md p-2 bg-secondary" style="height:300px;" data-effect="slide-right"></div>
	</div>

</div>

<style>
    #header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 30px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10000;
        
    }

    a.logo{
        color: #094b65;
        font-weight: 700;
        font-size: 2em;
        text-decoration: none;
        margin-left:100px ;
    }

    ul.menu{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }

    li.menulist{
        list-style: none;
        margin-left: 20px;
    }

    li.menulist a{
text-decoration: none;
padding: 6px 15px;
color: #094b65;
font-weight: 700;
border-radius: 20px;
    }

    li.menulist a:hover{
        background-color: #094b65;
        color: #fff;
    }
section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('back2.webp');
     

}

section::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #094b65, transparent);
    z-index: 10;
}

 h2#text{
    position: absolute;
    color: #094b65;
    font-size: 10vw;
    text-align: center;
    line-height: 0.55em;
    font-family: 'Rancho',cursive;

}

h2#text span{
    font-size: 0.20em;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: 'poppins',sans-serif;
}
#btn{
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    background: #fff;
    color: #094b65;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 40px;
    transform: translateY(100px);
    margin-top: 130px;
}
#btn:hover{
    background: #094b65;
    color: #fff;
}
.sec{
    position: relative;
    padding: 100px;
    background: #094b65;
    
}
.sec h2{
    font-size: 22px;
    color: #f5f5f5;
    font-weight: 600;
    font-family: 'Noto Serif', serif;
    text-align: center;
}
.sec p{
    font-size: 16px;
    color: #f5f5f5;
    font-weight: 400;
    text-align: justify;
}


@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


