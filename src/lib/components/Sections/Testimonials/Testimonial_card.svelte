<script lang="ts">
  import Star from "$components/Icons/Star.svelte";

    export let message: string;
    export let customerName: string;
    export let customerAvatar: string;
</script>

<div class="testimonial-card">
    <p class="message">{message}</p>
    <div class="star-rating">
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>
    <div class="customer">
        <img class="customer_avatar" src={customerAvatar} alt={customerName} />
        <div class="wrap">
            <p class="customer_name">{customerName}</p>
            <span>Loyal Customer</span>
        </div>
        
    </div>
</div>

<style lang="scss">
    .testimonial-card {
        display: grid;
        place-items: center;
        gap: var(--space-l);
        padding: var(--space-xl) var(--space-xxxl);
        border-radius: var(--border-radius);
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(87, 49, 135, 0.40);
        position: relative;

        &::before {
            content: '';
            background: url('$lib/icons/icon_qoute.svg') no-repeat;
            width: 3.484rem;
            height: 3rem;
            position: absolute;
            top: -0.8rem;
            left: 4px;

        }
        

        .message {
            font-size: var(--text-xs);
            text-align: center;
        }

        .star-rating {
            display: flex;
            gap: var(--space-l);
        }

        .customer {
            display: flex;
            gap: var(--space-s);
            align-items: center;

            &_name {
                font-size: var(--text-xs);
                font-weight: 600;
            }
            span {
                font-size: var(--text-xxs);
                color: var(--color-secondary);
            }

            .wrap {
                display: grid;
            }
        }
    }
</style>
  