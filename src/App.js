import { Component } from "react";
import ReactLoading from "react-loading";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import PixabayApi from "./services/pixabayApi";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  handleOpenModal = (e) => {
    this.setState({
      showModal: true,
      largeImg: e.target.dataset.source,
    });
  };
  handleCloseModal = () => {
    this.setState({
      showModal: false,
      largeImg: "",
    });
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };
  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ isLoading: true });
    const options = {
      currentPage: currentPage,
      searchQuery: searchQuery,
    };
    PixabayApi.fetchImg(options)
      .then((data) => {
        this.setState(({ images, currentPage }) => ({
          images: [...images, ...data],
          currentPage: currentPage + 1,
        }));
      })
      .then(() => {
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((e) => this.setState({ error: e }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    const { images, isLoading, showModal, largeImg } = this.state;
    const shouldRenderBtn = images.length > 0 && !isLoading;
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery onClick={this.handleOpenModal} items={images}>
            {isLoading && (
              <ReactLoading
                className="spinner"
                type="spin"
                color="#303f9f"
                height={50}
                width={50}
              />
            )}
            {shouldRenderBtn && <Button onClick={this.fetchImages} />}
          </ImageGallery>
          {showModal && (
            <Modal onClose={this.handleCloseModal} src={largeImg} />
          )}
        </div>
      </>
    );
  }
}

export default App;
