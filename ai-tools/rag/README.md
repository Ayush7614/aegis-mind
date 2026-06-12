# RAG

Retrieval-augmented generation — pipelines, vector stores, evaluation.

## Components

```text
Documents → Chunk → Embed → Store → Retrieve → Augment prompt → Generate
```

## Vector DB options

| DB | Notes |
|----|-------|
| Chroma | Local, simple |
| Pinecone | Managed, scalable |
| pgvector | SQL + vectors |
| Weaviate | Hybrid search |

## Security touchpoints

- Poisoned documents in corpus → indirect injection
- Over-fetching → cross-user data leak
- Embedding inversion → sensitive text recovery (research)

## Notes

| Note | Description |
|------|-------------|
| — | — |
