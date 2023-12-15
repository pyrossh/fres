import { Head } from "$fresh/runtime.ts";

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

export default function Posts() {
  return (
    <div class="mx-auto">
      <Head>
        <title>pyros.sh | Posts</title>
        <meta name="description" content="Peter John's Posts" />
      </Head>
      <div class="px-4 py-40 mx-auto">TBD</div>
      {
        /* <div slot="body" class="container">
        {
          posts.map((post) => (
            <div class="row">
              <span>{post.date.toISOString().split("T")[0]}</span>
              <a href={`/blog/${post.date.getFullYear()}/${post.id}`}>
                {post.title}
              </a>
            </div>
          ))
        }
      </div> */
      }
    </div>
  );
}

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
