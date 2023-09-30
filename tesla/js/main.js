const sections = document.querySelectorAll('.home')
const title = document.querySelector('.car_model_title')
const paragraph = document.querySelector('p')
const link = document.querySelector('.car_model_link')
const left_btn = document.querySelector('.home_button_order')
const right_btn = document.querySelector('.home_button_exist')

let page = new Page(sections, title, paragraph, link, left_btn, right_btn)

createObserver(sections)

function createObserver(elements) {
	options = {
		root: null,
		threshold: 0.5, // 閥值,0~1之間的數字，0代表完全不在viewport中，1代表完全在viewport中,也可以複數表示[0,0.25,0.5,0.75,1]
		rootMargin: '0px', //觀察範圍的邊界，可以用來延長觀察範圍
	}

	const observer = new IntersectionObserver(handleIntersect, options)

	elements.forEach(element => {
		observer.observe(element)
	})
	// observer只能觀察到一個section，所以要用forEach來觀察每個section
}

function handleIntersect(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			let current_id = entry.target.id

			switch (current_id) {
				case 'model_y':
					page.title = 'Model Y'
					page.paragraph = '立即報名 '
					page.link = '再見。燃油時代|Tesla純電野宿之旅'
					page.left_btn = '客製化訂單'
					page.right_btn = '了解更多內容'

					break
				case 'model_3':
					page.title = 'Model 3'
					page.paragraph = '立即報名 '
					page.link = '再見。燃油時代|Tesla純電野宿之旅'
					right_btn.style.display = ''
					left_btn.style.display = ''
					page.left_btn = '了解更多內容'
					page.right_btn = '訂閱最新資訊'
					break
				case 'model_s':
					page.title = 'Model S'
					page.paragraph = '立即報名 '
					page.link = '再見。燃油時代|Tesla純電野宿之旅'
					right_btn.style.display = ''
					left_btn.style.display = ''
					page.left_btn = '客製化訂單'
					page.right_btn = '了解更多內容'

					break
				case 'model_x':
					page.title = 'Model X'
					page.paragraph = '立即報名 '
					page.link = '再見。燃油時代|Tesla純電野宿之旅'
					right_btn.style.display = ''
					left_btn.style.display = ''
					page.left_btn = '客製化訂單'
					page.right_btn = '了解更多內容'
					break
				case 'solar_roof':
					page.title = 'Solar Roof 和 Powerwall 產品'
					page.paragraph = '全方位能源供應'
					page.link = ''
					right_btn.style.display = 'none'
					left_btn.style.display = ''
					page.left_btn = '了解更多內容'
					page.right_btn = ''
					break
				case 'others':
					page.title = '精品配件'
					page.paragraph = ''
					page.link = ''
					right_btn.style.display = ''
					left_btn.style.display = 'none'
					page.left_btn = ''
					page.right_btn = '立即訂購'

					break
			}
			title.innerHTML = page.title
			left_btn.childNodes[0].textContent = page.left_btn
			right_btn.childNodes[0].textContent = page.right_btn
			paragraph.childNodes[0].textContent = page.paragraph
			paragraph.childNodes[1].textContent = page.link
		}
	})
}

const main = document.querySelector('main')

main.addEventListener('scroll', e => {
	let viewHigh = e.currentTarget.offsetHeight
	let currentOffset = e.currentTarget.scrollTop % viewHigh
	let opacityValue = Math.abs(1 - currentOffset / (viewHigh / 2))
	console.log(opacityValue)
	title.style.opacity = opacityValue
	paragraph.style.opacity = opacityValue
	link.style.opacity = opacityValue
	right_btn.style.opacity = opacityValue
	left_btn.style.opacity = opacityValue
})
