<script>
  import Client from "./../utils/client";
  import PrismicDom from "prismic-dom";

  const query = async () => {
    const response = await Client.query("");
    return response;
  };

  const getFirstDoc = async resPromise => {
    const response = await resPromise;
    const firstDoc = response.results[0];
    return firstDoc;
  };

  const response = query();
  const firstDoc = getFirstDoc(response);
</script>

<style>
  main {
    font-family: sans-serif;
  }

  :global(h1) {
    font-family: "Comic Sans MS";
  }

  .flex-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    width: 95vw;
    max-width: 800px;
  }

  pre {
    background: #eee;
    padding: 1rem;
    overflow: scroll;
    border-radius: 3px;
  }
</style>

<main class="flex-layout">
  <article class="container">
    {#await firstDoc}
    <h1>Loading...</h1>
    {:then firstDoc}
    {@html PrismicDom.RichText.asHtml(firstDoc.data.title)}
    {:catch error}
    <h1>{error}</h1>
    {/await}
    <p>Once it's done loading, you'll see the raw JSON of your query, here:</p>
    {#await response}
    <p>Loading...</p>
    {:then response}
    <pre>{JSON.stringify(response, null, 2)}</pre>
    {:catch error}
    <p>{error}</p>
    {/await}
  </article>
</main>