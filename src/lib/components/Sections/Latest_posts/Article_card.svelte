<script lang="ts">
    import thumbnail from "$lib/images/blog/5-essential-cleaning-tips.webp"
    export let title:string;
    export let desc:string;
    export let date: Date;
    export let category:string = "Cleaning Tips";
    import {formatDate} from "$lib/utils/format_date"

</script>

<article>
    <div class="img-holder">
        <img src="{thumbnail}" alt="{title}">
    </div>
    <div class="text">
        <div class="meta">
            <span class="category">{category}</span>
            <span class="date">{formatDate(date)}</span>
        </div>
        <h3>{title}</h3>
        <p class="desc">{desc}</p>
    </div>
</article>

<style lang="scss">
    article {
        display: grid;

        .img-holder {
            border-radius: var(--border-radius);
            position: relative;
            overflow: hidden;

            &::before {
                content:'';
                background: linear-gradient(12deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%);
                width: 100%;
                height: 100%;
                position: absolute;
                inset: 0;
            }
        }

        .text {
            background-color: white;
            margin-top: -10%;
            position: relative;
            z-index: 3;
            padding: var(--space-l) var(--space-m) var(--space-xl);
            width: min(27.563rem, 90%);
            margin-inline: auto;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow-3);
            display: grid;
            row-gap: var(--space-base);

            h3 {
                text-wrap: balance;
            }
            p {
                font-size: var(--text-xs);
                color: var(--color-base-400);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3; /* Adjust the number of lines to control the description length */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal; 
            }
        }

        .meta {
            font-size: var(--text-xxs);
            display: flex;
            justify-content: space-between;

            span.category {
                color: var(--color-accent);
            }

            span.date {
                color: var(--color-base-300);
            }
        }

    }

</style>