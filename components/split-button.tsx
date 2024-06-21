import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import * as React from "react";
import { Fragment, useRef, useState } from "react";

type SplitButtonProps = {
    main: {
        display: string;
        action: () => void;
    };
    options: {
        display: string;
        action: () => void;
    }[];
};

export default function SplitButton({ main, options }: SplitButtonProps) {
    const [open, setOpen] = useState(false);

    const anchorRef = useRef<HTMLDivElement>(null);
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        event.preventDefault();
        options[index].action();
        setOpen(true);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Fragment>
            <ButtonGroup
                ref={anchorRef}
                variant="contained"
                aria-label="Button group with a nested menu"
                sx={{
                    "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                        borderRight: "none",
                    },
                }}
            >
                <Button
                    sx={{
                        py: 1.5,
                    }}
                    color="secondary"
                    onClick={main.action}
                >
                    <Typography variant="h6">Select files</Typography>
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "secondary.500",
                    }}
                >
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: "60%",
                            borderRight: "1px solid var(--mui-palette-grey-800)",
                        }}
                    />
                </Box>
                <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    color="secondary"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            {options.length > 0 && (
                <Popper
                    sx={{
                        zIndex: 1,
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    transition
                    disablePortal
                >
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option.display}
                                                onClick={(event) =>
                                                    handleMenuItemClick(event, index)
                                                }
                                            >
                                                <Tooltip
                                                    title={option.display}
                                                    placement="top-start"
                                                    slotProps={{
                                                        popper: {
                                                            modifiers: [
                                                                {
                                                                    name: "offset",
                                                                    options: {
                                                                        offset: [0, -10],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    }}
                                                >
                                                    <Typography noWrap>{option.display}</Typography>
                                                </Tooltip>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            )}
        </Fragment>
    );
}
