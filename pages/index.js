import React, { useRef, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Test2.module.scss'
import Logo from '../public/wy-logo.svg'
import MousePosition from '../comps/mousePosition'
import ScrollPosition from '../comps/scrollPosition'
import WindowDimensions from '../comps/windowDimensions'
import DocumentHeight from '../comps/documentHeight'
import Footer from '../comps/footer'

export default function Test() {
	return (
		<>
		<div className={styles.fullOverlay}>
			<div className="data-top-left">
								<WindowDimensions />
			</div>
			<div className="data-top-right">
								<MousePosition />
			</div>
			<div className="data-bottom-left">
								<ScrollPosition /> : <DocumentHeight />
			</div>
			<div className="data-bottom-right">
							w-y sys v1.0.2
			</div>
		</div>
		
				<div className={styles.overlayData}>

					<section className={styles.hero}>
						<div>
							<h1 className={styles.title}>Weyland-Yutani Corp</h1>
							<div className={styles.logo}>
								<Image src={Logo} alt='Weyland Yutani' layout="responsive" />
							</div>
							<h1 className={styles.subTitle}>building better worlds</h1>
						</div>
						<ul className={styles.locations}>
							<li>Tokyo</li>
							<li>London</li>
							<li>San Francisco</li>
							<li>Sea of Tranquility</li>
							<li>Thedus</li>
						</ul>
					</section>

					<section id="about" className={styles.about}>
						<div className={styles.row}>
							<div>
								<h1>About</h1>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
							</div>
							<ul className={styles.buttons}>
								<li><a href="#engineering">Engineering</a></li>
								<li><a href="#exploration">Exploration</a></li>
								<li><a href="#terraforming">Terraforming</a></li>
							</ul>
						</div>
					</section>
			
					<section id="engineering" className={styles.engineering}>
						<div className={styles.row}>
							<div>
								<h1>Engineering</h1>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
							</div>
							{/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
						</div>
					</section>
		
					<section id="exploration" className={styles.exploration}>
						<div className={styles.row}>
							<div>
								<h1>Exploration</h1>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
							</div>
							{/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
						</div>
					</section>
		
					<section id="terraforming" className={styles.terraforming}>
						<div className={styles.row}>
							<div>
								<h1>Terraforming</h1>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
							</div>
							{/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
						</div>
					</section>

				</div>
		<Footer />

		</>
	);
}
