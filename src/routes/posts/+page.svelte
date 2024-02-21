<svelte:head>
	<title>pyros.sh | Posts</title>
	<meta name="description" content="Peter John's Posts" />
</svelte:head>
<div class="h-screen">
	<div class="px-4 py-40 mx-auto">TBD</div>
</div>

<!-- 


// {
      //   /* <div slot="body" class="container">
      //   {
      //     posts.map((post) => (
      //       <div class="row">
      //         <span>{post.date.toISOString().split("T")[0]}</span>
      //         <a href={`/blog/${post.date.getFullYear()}/${post.id}`}>
      //           {post.title}
      //         </a>
      //       </div>
      //     ))
      //   }
      // </div> */
      // }
// ---
// const { title, description, image, date, tags } = Astro.props.frontmatter;
// ---

// <title slot="head">pyros.sh | {title}</title>
// <meta slot="head" name="description" content={description} />
// <meta slot="head" name="keywords" content={tags} />
// <div slot="body" class="post-page">
//   <div class="title-container">
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//     <div class="date">
//       <h3>{date}</h3>
//     </div>
//   </div>
//   <div class="tags-container">
//     {tags.map((text) => <Tag text={text} />)}
//   </div>
//   <div>
//     <slot />
//   </div>
// </div>

// const files = await Astro.glob("./**/*.{md,mdx}");
// const posts = files.map(({ frontmatter: item }) => ({
//   id: item.title.toLowerCase().replaceAll(" ", "-"),
//   title: item.title,
//   date: new Date(item.date),
// }));
// ---

// <style>
//   .container {
//     display: flex;
//     flex-direction: column;
//     min-height: calc(100vh - 120px);
//   }

//   .row {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     margin-top: 1.5rem;
//     line-height: 1.5rem;

//     & span {
//       width: 9rem;
//     }

//     & a {
//       margin-left: 2rem;
//       text-decoration: none;
//       color: black;
//       border-bottom: 2px solid black;

//       &:hover,
//       &:visited {
//         text-decoration: none;
//       }

//       @media (--mobile) {
//         margin-left: 0rem;
//       }
//     }
//   }
// </style>


 -->

<style>
	.post-page {
		display: flex;
		flex-direction: column;
		width: 100%;

		& code {
			font-family:
				Menlo,
				Monaco,
				Courier New,
				monospace;
			font-size: 0.9em;
		}

		& p {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		& pre {
			max-width: 64rem;
			font-family: monospace;
			font-size: 14px;
			border-radius: 16px;
			padding: 16px;
			margin: 8px;
			line-height: 20px;
			overflow-x: auto;
		}

		& img {
			width: auto;
			@media (--mobile) {
				width: 100%;
			}
		}

		& .title-container {
			display: flex;
			flex: 1;
			font-family: serif;
			flex-direction: column;

			& h1 {
				color: var(--black-light);
				margin: 0;
				line-height: 3rem;
			}

			& h2 {
				color: var(--yellow-dark);
				font-size: 1.5rem;
				font-weight: 500;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			& h3 {
				color: var(--black-light);
				font-size: 1.5rem;
				font-weight: 500;
				margin: 0;
			}

			& .date {
				display: flex;
				flex: 1;
				flex-direction: row;
				justify-content: flex-end;
				margin-right: var(--space-10);

				@media (--mobile) {
					justify-content: flex-start;
					margin-top: 0.5rem;
					margin-bottom: 0.5rem;
				}
			}
		}

		& .tags-container {
			margin-top: var(--space-1);
			margin-bottom: var(--space-1);

			@media (--mobile) {
				margin-top: var(--space-4);
				margin-bottom: var(--space-4);
			}
		}
	}

	.tag {
		background-color: var(--black-light);
		color: white;
		display: inline-block;
		padding-left: 8px;
		padding-right: 8px;
		text-align: center;
		margin-right: 1rem;
	}
</style>
