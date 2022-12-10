<script>
	// import '../js/jquery.parallax';

	import { onMount } from 'svelte';

	onMount(() => {
		let text = document.getElementById('text');
		let btn = document.getElementById('btn');
		let header = document.getElementById('header');

		window.addEventListener('scroll', function () {
			let value = window.scrollY;
			// @ts-ignore
			text.style.top = 50 + value * -0.5 + '%';
			// @ts-ignore
			btn.style.top = value * 1.5 + 'px';
			// @ts-ignore
			header.style.top = value * +0.5 + 'px';
		});
	});
</script>

<header id="header">
	<a href="" class="logo">Ava</a>
	<ul class="menu">
		<li class="menulist"><a href="" class="">Home</a></li>
		<li class="menulist"><a href="" class="">About</a></li>
		<li class="menulist"><a href="" class="">Project</a></li>
		<li class="menulist"><a href="" class="">Contact</a></li>
	</ul>
</header>
<section>
	<h2 id="text"><span>It's time for a new </span><br />Advanture</h2>
	<a href="#" id="btn">Explore</a>
</section>
<div class="sec">
	<h2>About Me</h2>

	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book. It has survived not only five centuries,
		but also the leap into electronic typesetting, remaining essentially unchanged. It was
		popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
		and more recently with desktop publishing software like Aldus PageMaker including versions of
		Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
		Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
		took a galley of type and scrambled it to make a type specimen book. It has survived not only
		five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
		passages, and more recently with desktop publishing software like Aldus PageMaker including
		versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
		industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
		unknown printer took a galley of type and scrambled it to make a type specimen book. It has
		survived not only five centuries, but also the leap into electronic typesetting, remaining
		essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
		containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
		PageMaker including versions of Lorem Ipsum
	</p>
</div>

<div id="project" class="w-full h-screen">
	<div class="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
		<h2
			class="text-7xl text-center md:text-3xl uppercase tracking-wider font-bold top-2 text-sky-700"
		>
			Project
		</h2>

		<p class="project py-4 text-center">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		</p>
		<div class="mx-auto max-w-5xl  grid md:grid-cols-3 gap-8">
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Web Project
				</h2>
			</div>
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Mobile App
				</h2>
			</div>
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Laravel Project
				</h2>
			</div>
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Nextjs Project
				</h2>
			</div>
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Reactjs Project
				</h2>
			</div>
			<div class="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
				<img class="rounded-md duration-200 hover:scale-110" src="/background.jpg" alt="" />
				<h2
					class="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4"
				>
					Graphics Project
				</h2>
			</div>
		</div>
	</div>
</div>
<div >
    
</div>
<div id="contact" class="w-full h-screen">
	<div class="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
		<h2
			class="text-7xl text-center md:text-3xl uppercase tracking-wider font-bold top-2 text-sky-700"
		>
			Contact
		</h2>

		<p class="project py-4 text-center">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		</p>
    <div class='w-full md:w-full h-full rounded-xl p-4'>
        <div class='p-4 text-left'>
            <form action='' id="contactForm">
                <div class='grid md:grid-cols-2 gap-4 w-full py-4 sm:grid-cols-1'>
                    <div class='flex flex-col '>
                    <label class='capitalize text-sm py-2 text-slate-600 font-light'>name</label>
                    <input type="text" id="" name="contactname"  class='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'/>
                </div>
                <div class='flex flex-col'>
                    <label class='capitalize text-sm py-2 text-slate-600 font-light'>phone</label>
                    <input type="text" id="" name="phone" class='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'/>
                </div>
                <div class='flex flex-col col-span-2 '>
                    <label class='capitalize text-sm py-2 text-slate-600 font-light'>email</label>
                    <input type="email" id="" name="email"  class='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'/>
                </div>
                <div class='flex flex-col col-span-2 '>
                    <label class='capitalize text-sm py-1 text-slate-600 font-light'>message</label>
                    <textarea  id="" rows="10" name="message"  class='border-2 rounded-lg  flex focus:outline-none border-blue-200'/>
                </div>
                <div class=''>
       
                    <a href="#" id="submit">Submit</a>

        </div>
               </div>
            </form>
            </div>
        </div>
    </div>
</div>
<style>
	#header {
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

	a.logo {
		color: #094b65;
		font-weight: 700;
		font-size: 2em;
		text-decoration: none;
		margin-left: 100px;
	}

	ul.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	li.menulist {
		list-style: none;
		margin-left: 20px;
	}

	li.menulist a {
		text-decoration: none;
		padding: 6px 15px;
		color: #094b65;
		font-weight: 700;
		border-radius: 20px;
	}

	li.menulist a:hover {
		background-color: #094b65;
		color: #fff;
	}
	section {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('back2.webp');
	}

	section::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: linear-gradient(to top, #094b65, transparent);
		z-index: 10;
	}

	h2#text {
		position: absolute;
		color: #094b65;
		font-size: 10vw;
		text-align: center;
		line-height: 0.55em;
		font-family: 'Rancho', cursive;
	}

	h2#text span {
		font-size: 0.2em;
		letter-spacing: 2px;
		font-weight: 400;
		font-family: 'poppins', sans-serif;
	}
	#btn {
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

    #submit{
        text-decoration: none;
		display: inline-block;
		padding: 8px 30px;
		background: #094b65;
		color: #fff;
		font-size: 1.2em;
		font-weight: 500;
		letter-spacing: 2px;
		border-radius: 40px;
		transform: translateY(100px);
		
    }
	#btn:hover {
		background: #094b65;
		color: #fff;
	}
	.sec {
		position: relative;
		padding: 100px;
		background: #094b65;
	}
	.sec h2 {
		font-size: 22px;
		color: #f5f5f5;
		font-weight: 600;
		font-family: 'Noto Serif', serif;
		text-align: center;
	}
	.sec p {
		font-size: 16px;
		color: #f5f5f5;
		font-weight: 400;
		text-align: justify;
	}

	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
