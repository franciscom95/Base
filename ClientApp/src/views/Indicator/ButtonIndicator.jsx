import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  fabProgress: {
    color: purple[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: purple[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  cssRoot:{
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }
});

class ButtonIndicator extends React.Component {
  timer = null;

  state = {
    loading: false,
    success: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
            });
          }, 2000);
        },
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });

    return (
      <div className={classes.root}>
        
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="secondary"
            className={classNames(buttonClassname,classes.cssRoot)}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
           {this.props.Texto}
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    );
  }
}

ButtonIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonIndicator);