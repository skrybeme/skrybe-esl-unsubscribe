<div class="loader">
  <div class="spinner" />
</div>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(270deg);
    }

    50% {
      transform: rotate(540deg);
    }

    75% {
      transform: rotate(810deg);
    }

    100% {
      transform: rotate(1080deg);
    }
  }

  .loader {
    align-items: center;
    bottom :0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    &:before {
      background-color: #fff;
      content: '';
      bottom :0;
      left: 0;
      opacity: 0.6;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }

  .spinner {
    animation: spin 3s linear infinite;
    border-radius: 50%;
    border: 4px solid transparent;
    border-bottom-color: var(--color-violet);
    box-sizing: border-box;
    display: inline-block;
    height: 32px;
    position: relative;
    width: 32px;
    z-index: 1;

    &:before {
      animation: spin 3s infinite;
      border-radius: 50%;
      border: 4px solid transparent;
      border-bottom-color: var(--color-violet);
      bottom: -4px;
      box-sizing: content-box;
      content: '';
      left: -4px;
      position: absolute;
      right: -4px;
      top: -4px;
    }
  }
</style>